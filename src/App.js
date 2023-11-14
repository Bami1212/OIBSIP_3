import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {
        text: taskText,
        added: new Date(),
        completed: null,
      };

      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = new Date();
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        <h2>Pending Tasks</h2>
        <ul>
          {tasks
            .filter((task) => !task.completed)
            .map((task, index) => (
              <li key={index}>
                <span>{task.text}</span>
                <button onClick={() => completeTask(index)}>
                  Complete
                </button>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h2>Completed Tasks</h2>
        <ul>
          {tasks
            .filter((task) => task.completed)
            .map((task, index) => (
              <li key={index} className="completed">
                <span>{task.text}</span>
                <p>Completed on {task.completed.toLocaleString()}</p>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
