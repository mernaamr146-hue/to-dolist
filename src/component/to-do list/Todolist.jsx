import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Todolist.css";

export default function Todolist() {
  const [input, setInput] = useState("");

  // Load tasks from LocalStorage
  const [List, setList] = useState(() => {
    const savedTasks = localStorage.getItem("myTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("All");
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");

  // Save tasks whenever List changes
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(List));
  }, [List]);

  // Add Task
  function addTask() {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setList((prev) => [...prev, newTask]);
    setInput("");
  }

  // Delete Task
  function deleteTask(id) {
    setList((prev) => prev.filter((task) => task.id !== id));
  }

  // Complete Task
  function toggleTask(id) {
    setList((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Start Editing
  function startEdit(task) {
    setEditingId(task.id);
    setEditInput(task.text);
  }

  // Save Edited Task
  function saveEdit(id) {
    if (editInput.trim() === "") return;

    setList((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, text: editInput.trim() }
          : task
      )
    );

    setEditingId(null);
    setEditInput("");
  }

  // Filter Tasks
  const filteredTasks = List.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  const completedCount = List.filter(
    (task) => task.completed
  ).length;

  const pendingCount = List.length - completedCount;

  return (
    <div
      id="todo"
      className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 px-4 py-12 sm:px-6"
    >
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white shadow-lg shadow-indigo-200">
            <i className="fas fa-clipboard-check"></i>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            My To-Do List
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Organize your day, one task at a time.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-xl shadow-indigo-100/50 backdrop-blur-xl sm:p-8">

          {/* Statistics */}
          <div className="mb-7 grid grid-cols-3 gap-3">

            <div className="rounded-2xl bg-indigo-50 p-4 text-center">
              <p className="text-2xl font-bold text-indigo-600">
                {List.length}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Total
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">
                {completedCount}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Completed
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-4 text-center">
              <p className="text-2xl font-bold text-amber-600">
                {pendingCount}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Pending
              </p>
            </div>

          </div>

          {/* Add Task */}
          <div className="mb-7 flex gap-2 rounded-2xl bg-slate-100 p-2 focus-within:ring-2 focus-within:ring-indigo-400">

            <input
              type="text"
              value={input}
              placeholder="What do you need to do?"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addTask();
              }}
              className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />

            <button
              onClick={addTask}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 hover:shadow-lg active:scale-95"
              aria-label="Add task"
            >
              <i className="fas fa-plus"></i>
            </button>

          </div>

          {/* Filter */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

            <h2 className="font-bold text-slate-800">
              My Tasks
            </h2>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none transition focus:border-indigo-400"
            >
              <option value="All">All Tasks</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>

          </div>

          {/* Task List */}
          <div className="space-y-3">

            {filteredTasks.length === 0 ? (

              <div className="rounded-2xl border-2 border-dashed border-slate-200 py-12 text-center">

                <i className="fas fa-clipboard-list mb-4 text-4xl text-slate-300"></i>

                <p className="font-semibold text-slate-500">
                  {List.length === 0
                    ? "No tasks yet!"
                    : "No tasks found."}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Add a new task to get started.
                </p>

              </div>

            ) : (

              filteredTasks.map((task) => (

                <div
                  key={task.id}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-100 hover:shadow-md sm:p-4"
                >

                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 shrink-0 cursor-pointer accent-indigo-600"
                  />

                  {/* Task Text / Edit Input */}
                  <div className="min-w-0 flex-1">

                    {editingId === task.id ? (

                      <input
                        type="text"
                        autoFocus
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveEdit(task.id);
                          if (e.key === "Escape") setEditingId(null);
                        }}
                        className="w-full rounded-lg border border-indigo-300 px-2 py-1 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-indigo-100"
                      />

                    ) : (

                      <p
                        className={`break-words text-sm font-medium ${
                          task.completed
                            ? "text-slate-400 line-through"
                            : "text-slate-700"
                        }`}
                      >
                        {task.text}
                      </p>

                    )}

                  </div>

                  {/* Action Buttons */}
                  <div className="flex shrink-0 items-center gap-1">

                    {editingId === task.id ? (

                      <>
                        <button
                          onClick={() => saveEdit(task.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-emerald-600 transition hover:bg-emerald-50"
                          aria-label="Save edit"
                        >
                          <i className="fas fa-check"></i>
                        </button>

                        <button
                          onClick={() => setEditingId(null)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100"
                          aria-label="Cancel edit"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </>

                    ) : (

                      <>
                        <button
                          onClick={() => startEdit(task)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-indigo-500 transition hover:bg-indigo-50"
                          aria-label="Edit task"
                        >
                          <i className="fas fa-pen"></i>
                        </button>

                        <button
                          onClick={() => deleteTask(task.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-rose-500 transition hover:bg-rose-50"
                          aria-label="Delete task"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </>

                    )}

                  </div>

                </div>

              ))

            )}

          </div>

          {/* Footer */}
          {List.length > 0 && (
            <div className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-400">
              Keep going! You're making progress.
            </div>
          )}

        </div>

      </div>
    </div>
  );
}