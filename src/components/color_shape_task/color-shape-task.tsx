import React, { useState } from "react";

const ColorShapeTask = ({
  sections = 2,
  colorFraction = 1,
  taskMessage = "Color 1/2 of the shape",
  checkAnswer1 = () => {},
}: {
  sections: number;
  colorFraction: number;
  taskMessage: string;
  checkAnswer1: any;
}) => {
  const [color, setColor] = useState("#0000ff"); // Default color is blue
  const [coloredSections, setColoredSections] = useState<Set<number>>(
    new Set()
  ); // Tracks the indices of the colored sections
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // State to track if the user's answer is correct

  // Handle the color change
  const handleColorChange = (event: any) => {
    setColor(event.target.value);
  };

  // Handle the reset of the task
  const resetTask = () => {
    setColoredSections(new Set()); // Clear all colored sections
    setIsCorrect(null); // Reset the correctness state
  };

  // Handle the click on a section to toggle its color
  const handleSectionClick = (sectionIndex: number) => {
    setColoredSections((prevState) => {
      const updatedSections = new Set(prevState);
      if (updatedSections.has(sectionIndex)) {
        updatedSections.delete(sectionIndex); // Remove color if already colored
      } else if (updatedSections.size < colorFraction) {
        updatedSections.add(sectionIndex); // Add color if not yet colored and within allowed fraction
      }
      return updatedSections;
    });
  };

  // Check if the user colored the correct amount of sections
  const checkAnswer = () => {
    if (coloredSections.size === colorFraction) {
      setIsCorrect(true); // Correct answer
      resetTask();
      return checkAnswer1(true);
    } else {
      setIsCorrect(false); // Incorrect answer
      return checkAnswer1(false);
    }
  };

  // Render the shape and sections
  const renderSections = () => {
    const sectionWidth = 100 / sections; // Each section's width based on the number of sections

    let sectionsArr = [];
    for (let i = 0; i < sections; i++) {
      sectionsArr.push(
        <div
          key={i}
          onClick={() => handleSectionClick(i)}
          style={{
            ...styles.section,
            width: `${sectionWidth}%`,
            backgroundColor: coloredSections.has(i) ? color : "white",
          }}
        ></div>
      );
    }

    return sectionsArr;
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Finding Fraction</div>
      <div style={styles.instruction}>{taskMessage}</div>
      <div style={styles.shapeContainer}>{renderSections()}</div>
      <div>
        <label htmlFor="colorPicker">Choose a color: </label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={handleColorChange}
        />
      </div>
      <div style={styles.feedback}>
        {isCorrect === null ? (
          <button onClick={checkAnswer} style={styles.checkButton}>
            Check Answer
          </button>
        ) : isCorrect ? (
          <div style={{ color: "green", fontSize: "20px" }}>Correct!</div>
        ) : (
          <div style={{ color: "red", fontSize: "20px" }}>
            Incorrect, try again.
          </div>
        )}
      </div>
      <button onClick={resetTask} style={styles.resetButton}>
        Start Over
      </button>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  instruction: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  shapeContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    border: "1px solid black",
    height: "300px",
    width: "500px",
    margin: "0 auto 20px auto",
  },
  section: {
    border: "1px solid black",
    height: "100%",
    cursor: "pointer",
  },
  resetButton: {
    marginTop: "20px",
    padding: "10px",
    fontSize: "16px",
  },
  feedback: {
    marginTop: "20px",
  },
  checkButton: {
    padding: "10px",
    fontSize: "16px",
    marginTop: "20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ColorShapeTask;
