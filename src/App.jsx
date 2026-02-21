

import { useState } from 'react';
import AddTask from "./components/AddTasks.jsx";
import TaskList from "./components/TaskList.jsx";
import "App.css";


export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h1>My To Do List</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Met Museum of Art', done: true},
  {id: 1, text: 'Wash clothes', done: false},
  {id: 2, text: `Watch a Knicks' game`, done: false},
  {id: 3, text: 'Go food shopping', done: false},
  {id: 4, text: 'Review JavaScript fundamentals', done: false},
  {id: 5, text: 'Watch Unrivaled games', done: false},
  {id: 6, text: 'Work on Capstone', done: false},
];








