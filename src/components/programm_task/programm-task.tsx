"use client";
import React, { useState } from "react";
import { Button, Radio, notification } from "antd";

const ProgrammingTask = ({ task }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  // Handle the change in the selected answer
  const handleAnswerChange = (e: any) => {
    setSelectedAnswer(e.target.value);
  };

  // Check if the answer is correct
  const checkAnswer = () => {
    if (selectedAnswer === task.correctAnswer) {
      setIsAnswerCorrect(true);
      notification.success({
        message: "Correct!",
        description: "Well done, you've selected the correct answer! 🎉",
      });
    } else {
      setIsAnswerCorrect(false);
      notification.error({
        message: "Incorrect",
        description: "Oops! That's not the correct answer. Try again.",
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <h3>{task.title}</h3>
      </div>
      <div style={styles.taskDescription}>
        <p>{task.description}</p>
      </div>

      <div style={styles.codeBlock}>
        <pre>{task.code}</pre>
      </div>

      <div style={styles.answerOptions}>
        <Radio.Group onChange={handleAnswerChange} value={selectedAnswer}>
          {task.answerOptions.map((option, index) => (
            <div key={index} style={styles.radioOption}>
              <Radio value={option.value} style={styles.radioInput}>
                {option.label}
              </Radio>
            </div>
          ))}
        </Radio.Group>
      </div>

      <Button
        type="primary"
        onClick={checkAnswer}
        style={styles.submitButton}
        disabled={!selectedAnswer}
      >
        check answer
      </Button>

      {isAnswerCorrect !== null && (
        <div style={styles.feedback}>
          {isAnswerCorrect ? (
            <span style={{ color: "green" }}>Correct answer!</span>
          ) : (
            <span style={{ color: "red" }}>Incorrect answer. Try again.</span>
          )}
        </div>
      )}
    </div>
  );
};

// Example task data

// Styling
const styles = {
  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  },
  taskDescription: {
    marginBottom: "20px",
  },
  codeBlock: {
    backgroundColor: "#2e2e2e",
    color: "white",
    padding: "20px",
    borderRadius: "5px",
    fontFamily: "monospace",
    marginBottom: "20px",
    textAlign: "left",
  },
  submitButton: {
    marginTop: "20px",
  },
  feedback: {
    marginTop: "20px",
    fontSize: "16px",
  },
  inputField: {
    width: "150px",
    padding: "10px",
    fontSize: "16px",
    color: "black",
    border: "2px solid #4096ff",
    backgroundColor: "#f0faff",
    borderRadius: "5px",
    textAlign: "center",
    outline: "none",
    fontFamily: "monospace",
  },
  answerOptions: {
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "left",
  },
  radioOption: {
    marginBottom: "10px",
  },
  radioInput: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    color: "black",
    border: "2px solid #4096ff",
    backgroundColor: "#f0faff",
    borderRadius: "5px",
    textAlign: "center",
    fontFamily: "monospace",
  },
};

export default ProgrammingTask;
