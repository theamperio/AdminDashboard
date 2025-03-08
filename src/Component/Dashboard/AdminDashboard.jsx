import React, { useState } from "react";
import TaskListNumber from "../Common/TaskListNumber";
import { AllTask } from "../Common/AllTask";
import { CreateEmployee } from "../Common/CreateEmployee";
import { CreateTask } from "../Common/CreateTask";


export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("create-task");
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
      
      <div className="flex flex-wrap border-b border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab("create-task")}
          className={`px-4 py-2 mr-2 ${
            activeTab === "create-task"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-white"
          }`}
        >
          Create Task
        </button>
        <button
          onClick={() => setActiveTab("add-employee")}
          className={`px-4 py-2 mr-2 ${
            activeTab === "add-employee"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-white"
          }`}
        >
          Add Employee
        </button>
        <button
          onClick={() => setActiveTab("all-tasks")}
          className={`px-4 py-2 ${
            activeTab === "all-tasks"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-white"
          }`}
        >
          View All Tasks
        </button>
      </div>
            
      {activeTab === "create-task" && <CreateTask />}
      {activeTab === "add-employee" && <CreateEmployee />}
      {activeTab === "all-tasks" && <AllTask />}
    </div>
  );
};
