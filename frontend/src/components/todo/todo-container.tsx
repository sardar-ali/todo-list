"use client";
import Task from "./task";
import { TaskTypes } from "@/types/_task-types";
import GlobalModal from "../global/global-modal";
import useTodadoApis from "@/services/todo-apis";
import React, { useEffect, useState } from "react";
import GlobalNotFound from "../global/global-not-found";

function TodoContainer() {
  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskTypes | null>(null);
  const { getTodoList, createTask, updateTask, deleteTask } = useTodadoApis();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
  });

  // onEdit function to handle the edit button click
  const onEdit = (data: TaskTypes) => {
    setTaskData(data);
    setSelectedTask(data);
    setIsEdit(true);
    setIsOpen(true);
  };

  // Function to get the todo list
  const fetchTodoList = async () => {
    try {
      const response = await getTodoList();
      setList(response);
      setIsEdit(false);
      setTaskData({
        title: "",
        description: "",
      });
    } catch (error) {
      console.error("Error fetching todo list:", error);
    }
  };

  // Function to handle the delete button click
  const onDelete = async (id: number) => {
    await deleteTask(id);
    fetchTodoList();
  };

  // Function to handle the form submission add and edit form
  const handleSubmit = async () => {
    try {
      if (isEdit && selectedTask) {
        await updateTask(Number(selectedTask.id), taskData);
      } else {
        await createTask(taskData);
      }
      fetchTodoList();
    } catch (error) {
      console.error("Error fetching todo list:", error);
    }
  };

  useEffect(() => {
    if (list.length === 0) {
      fetchTodoList();
    }
  }, []);

  return (
    <>
      <div className="w-[60%] h-[60%] bg-white rounded-lg shadow-smp-4 border">
        <div className="flex justify-between rounded-t-lg bg-primary p-4">
          <h1 className="text-2xl font-bold text-white">Todo List</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-[secondary]/80 transition-transform duration-400 hover:scale-110"
          >
            + Add Task
          </button>
        </div>
        <div className="flex flex-col text-stone h-[70vh] overflow-y-auto">
          {list.length === 0 ? (
            <GlobalNotFound />
          ) : (
            list.map((dt: TaskTypes, index: number) => {
              return (
                <Task
                  key={index}
                  data={dt}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              );
            })
          )}
        </div>
      </div>

      {isOpen && (
        <GlobalModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={isEdit ? "Edit Task" : "Add Task"}
          onSubmit={handleSubmit}
          disable={!taskData.title || !taskData.description}
          content={
            <>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Task Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={taskData.title}
                    onChange={(e) =>
                      setTaskData({ ...taskData, title: e.target.value })
                    }
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-0 focus:ring-blue-500"
                    placeholder="Enter task title"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={taskData.description}
                    onChange={(e) =>
                      setTaskData({ ...taskData, description: e.target.value })
                    }
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-0 focus:ring-blue-500"
                    placeholder="Enter task description"
                    rows={4}
                  />
                </div>
              </form>
            </>
          }
        />
      )}
    </>
  );
}

export default TodoContainer;
