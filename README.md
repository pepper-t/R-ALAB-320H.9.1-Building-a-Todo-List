# To Do List App: Helpful Resources for Its Creation

I prompted https://Claude.ai with the question: "Can you point me to the resources that show me how to build a to-do list using React?" All the sources pointed to React.dev, particularly https://react.dev/learn/extracting-state-logic-into-a-reducer

## React.dev Instructions

I pasted and committed the 'To Do List' from https://react.dev/learn/extracting-state-logic-into-a-reducer. I followed the instructions for updating the list to make it operable. The goal here was to update the App.jsx file from a useState to a useRef.

## To Do List: Final Update

After, completing the files according to the react.dev instruction, I updated the files according to my preferences.

I created the following folders and files for creating the To Do List app:

components folder: 
AddTasks.jsx
TaskList.jsx
tasksReducer.jsx

I updated the App.jsx by importing the AddTasks.jsx, TaskList.jsx, and taskReducer.jsx files into it.

ISSUES: I am not able to connect it and see the My To Do List interface.

## Claude Said...

I consulted Claude for the reason why my script was not working and the reason given was that I had not connected to the DOM. Claude furnished an index.js script for me to use and I remembered that main.jsx was in the file.

In the main.jsx, I changed the following lines to connect to the DOM:

I changed line 4 from: import App from './App.jsx' to import TaskApp from './App.jsx'
I changed line 8 in main.jsx from <App /> to <TaskApp />

Now, I can see the app and I was able to add, update, and delete tasks from it. The
delete button also disabled until the task checkbox is checked.


## Design

I altered the index.css to center the app and re-design the button and the text.





