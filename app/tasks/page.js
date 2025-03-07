import React from 'react';
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

const Tasks = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="inline-block">
        <TaskForm/>
        <TaskList/>
      </div>
    </div>
  );
};

export default Tasks;