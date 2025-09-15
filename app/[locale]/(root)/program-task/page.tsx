import React from "react";
import ProgrammingTask from "@/src/components/programm_task/programm-task";

const tasks = [
  {
    title: "Task: Simulate Plant Growth",
    description: "Choose the correct output of following python code",
    code: `
  1. leaves = 0
  2. soil = 0
  3. print("Leaves:", leaves)
  4. print("Soil:", soil)
  `,
    answerOptions: [
      { value: "A", label: "Leaves: 0, Soil: 0" },
      { value: "B", label: "Leaves: 1, Soil: 0" },
      { value: "C", label: "Leaves: 0, Soil: 1" },
      { value: "D", label: "Leaves: 1, Soil: 1" },
    ],
    correctAnswer: "A",
  },
];

const TaskPage = () => {
  return (
    <div>
      {tasks.map((task, index) => (
        <ProgrammingTask key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskPage;
