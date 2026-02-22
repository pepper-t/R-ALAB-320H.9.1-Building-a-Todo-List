
//App.jsx 

import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added':
      return [...tasks, { id: action.id, text: action.text, done: false }];
    case 'changed':
      return tasks.map(t => t.id === action.task.id ? action.task : t);
    case 'deleted':
      return tasks.filter(t => t.id !== action.id);
    default:
      throw Error('Unknown action: ' + action.type);
  }
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


export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({ type: 'added', id: nextId++, text });
  }
  function handleChangeTask(task) {
    dispatch({ type: 'changed', task });
  }
  function handleDeleteTask(taskId) {
    dispatch({ type: 'deleted', id: taskId });
  }

  return (
    <>
      <h1>My To Do List App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}





//The Entire 'To Do List' Updated to Reflect UseReducer Replacing UseState
/*
import { useReducer } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import tasksReducer from './tasksReducer.jsx';
import "App.css";


export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
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

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
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


*/


/*
//UPDATED ENTIRE 'TO DO LIST' CODE 

import { useState } from 'react';
import AddTask from "./components/AddTasks.jsx";
import TaskList from "./components/TaskList.jsx";
import "App.css";


function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
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

*/







/*
////////////////////////////////////////////////
///////UPDATED WITH SOME USE REDUCER FORMATTING
IN THE FUNCTION HANDLING TASKS///////////////

import { useState } from 'react';
import AddTask from "./components/AddTasks.jsx";
import TaskList from "./components/TaskList.jsx";
import "App.css";


export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    dispatch({//This is where {object: 'task that happened'} are written
        id: nextId++,
        text: text,
        done: false,
      });
  }

  function handleChangeTask(task) {
    setTasks({
         type: 'changed',
         task: task,
        
      });
  }

  function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId,
  });
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
*/

/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\ORIGINAL REACT.DEV 'PRAGUE ITINERARY'\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

import { useState } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

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
      <h1>Prague itinerary</h1>
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
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];







*/





