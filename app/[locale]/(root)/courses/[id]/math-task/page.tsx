"use client";
import React, { useState } from "react";
import { Steps, Drawer, Button, Input, notification } from "antd";
import ColorShapeTask from "@/src/components/color_shape_task/color-shape-task";

// OpenAI API Key (ensure it is securely stored in your environment)
const OPENAI_API_KEY =
  "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";

const TaskPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [chatMessages, setChatMessages] = useState<
    { user: string; bot: string }[]
  >([]);
  const [userInput, setUserInput] = useState("");
  const [mistakes, setMistakes] = useState(0); // Track the number of mistakes
  const [showChat, setShowChat] = useState(false); // Show ChatGPT after 3 mistakes
  const [drawerVisible, setDrawerVisible] = useState(false); // Control Drawer visibility

  const tasks = [
    {
      title: "Task 1",
      sections: 2,
      colorFraction: 1,
      gptQuestion: "Please explain Fraction in Math and 1/2 ",
      taskMessage: "Хүснэгтийн 1/2 хэсгийг өнгөөр будна уу.",
    },
    {
      title: "Task 2",
      sections: 3,
      colorFraction: 2,
      gptQuestion: "Please explain Fraction in Math and 2/3 ",
      taskMessage: "Хүснэгтийн 2/3 хэсгийг өнгөөр будна уу.",
    },
    {
      title: "Task 3",
      sections: 4,
      colorFraction: 3,
      gptQuestion: "Please explain Fraction in Math and 3/4 ",
      taskMessage: "Хүснэгтийн 3/4 хэсгийг өнгөөр будна уу.",
    },
  ];

  const handleStepChange = (current: number) => {
    setCurrentStep(current);
  };

  // Simulate typing effect for the bot's response
  const typeBotResponse = (response: string) => {
    let i = 0;
    const typingInterval = 50; // Delay between typing characters (ms)
    const botMessage = response;
    const typingEffect = setInterval(() => {
      setChatMessages((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        return [
          ...prevMessages.slice(0, -1),
          {
            user: lastMessage.user,
            bot: lastMessage.bot + botMessage[i], // Append one more character at a time
          },
        ];
      });
      i += 1;

      if (i === botMessage.length) {
        clearInterval(typingEffect); // Stop the typing effect when all characters are typed
      }
    }, typingInterval);
  };

  // Send a message to ChatGPT
  const sendMessageToChatGPT = async (userMessage: string) => {
    // Add user message to chat
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { user: userMessage, bot: "" }, // Bot's response will be typed out
    ]);

    // Send user message to OpenAI API and get the response
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: userMessage }],
        max_tokens: 200,
      }),
    });

    const data = await response.json();
    const botResponse = data.choices[0].message.content;

    typeBotResponse(botResponse);
  };

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleUserMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      sendMessageToChatGPT(userInput);
      setUserInput("");
    }
  };

  const checkAnswer = (res: any) => {
    if (res === false) {
      setMistakes((prev) => prev + 1);
    } else if (res === true && currentStep < tasks.length - 1) {
      setCurrentStep((prev) => Math.min(prev + 1, tasks.length - 1));
      setMistakes(0);
    } else if (res === true && currentStep === tasks.length - 1) {
      notification.success({
        message: "Congratulations!",
        description: "You've completed all tasks successfully! 🎉",
        duration: 3,
      });
    }

    // Show ChatGPT after 3 mistakes
    if (mistakes + 1 === 3) {
      let firstQuestion = tasks[currentStep].gptQuestion;
      sendMessageToChatGPT(`${firstQuestion} +. Монгол хэлээр тайлбарлаарай`);
      setDrawerVisible(true); // Show the chat drawer after 3 mistakes
    }
  };

  return (
    <div style={styles.container}>
      {/* Main Content (Tasks) */}
      <div style={styles.mainContent}>
        <Steps
          current={currentStep}
          onChange={handleStepChange}
          progressDot
          items={tasks.map((task) => ({
            title: task.title,
          }))}
        />

        {/* Render the task based on the current step */}
        {tasks[currentStep] && (
          <ColorShapeTask
            sections={tasks[currentStep].sections}
            colorFraction={tasks[currentStep].colorFraction}
            taskMessage={tasks[currentStep].taskMessage}
            checkAnswer1={checkAnswer}
          />
        )}
      </div>

      {/* Chat Sidebar using Ant Design Drawer (Visible after 3 mistakes) */}
      <Drawer
        title="Чамд тусалъя"
        placement="right"
        width={400}
        onClose={() => {
          setDrawerVisible(false);
          setMistakes(0); // Reset mistakes when closing the drawer
        }}
        open={drawerVisible}
        mask={false} // disables the overlay
        keyboard={false} // optional: disable esc key closing
        closable={true} // show close button
      >
        <div style={styles.chatBox}>
          {chatMessages.map((message, index) => (
            <div key={index} style={styles.messageContainer}>
              <div style={styles.userMessage}>{message.user}</div>
              <div style={styles.botMessage}>{message.bot}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleUserMessageSubmit} style={styles.inputForm}>
          <Input
            value={userInput}
            onChange={handleUserInputChange}
            placeholder="Ask something..."
            style={styles.inputField}
          />
          <Button
            type="primary"
            htmlType="submit"
            style={styles.sendButton}
            disabled={!userInput.trim()}
          >
            Send
          </Button>
        </form>
      </Drawer>
    </div>
  );
};

// Styling
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  chatBox: {
    maxHeight: "400px",
    overflowY: "auto",
    marginBottom: "10px",
  },
  messageContainer: {
    marginBottom: "10px",
  },
  userMessage: {
    fontWeight: "bold",
    color: "#007bff",
  },
  botMessage: {
    marginLeft: "10px",
    color: "#333",
  },
  inputForm: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  inputField: {
    width: "80%",
    padding: "10px",
    fontSize: "14px",
  },
  sendButton: {
    marginLeft: "10px",
    padding: "10px 15px",
    fontSize: "14px",
  },
};

export default TaskPage;
