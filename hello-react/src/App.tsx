import React from "react";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div>
      <div>
        <h1>Pending</h1>
        <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S"/>
        <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M"/>
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M"/>
        <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S"/>
      </div>
    </div>
  );
}

export default App;
