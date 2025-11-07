import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import FilterButtons from './components/FilterButtons'


function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([]);


  // Task object structure
  const task = {
    id: 1, // unique identifier
    text: "Learn React", // task description
    completed: false // completion status
  };
  
  const addTask = (taskText) => {
    // Add new task to state
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    }

    setTasks([...tasks, newTask]);
  };
  
  const toggleTask = (id) => {
    // Toggle task completion
    setTasks(tasks.map(task => 
      task.id === id ? {
            ...task, completed: !task.completed
        } : task
    ));

  };
  
  const deleteTask = (id) => {
    // Remove task from state
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filterTask = (choice) => {
    if (choice === "all") {
      return tasks
    }
    else if (choice === "active") {
      return tasks.filter(task => task.completed === false);
    }
    else if (choice === "completed") {
      return tasks.filter(task => task.completed === true);

    }
    else {
      return null;
    }
  };

  const [filter, setFilter] = useState("all");
  const filteredTasks = filterTask(filter)

  

  

  return (
    <>
       <div className="app">
          <header className="site-header">
            <input type="image" src="menu_icon.png" alt="Menu" />
            <form>
              <label className="search-container">
                <img className="search_icon" src="search_icon.png" alt="Search" />
                <input className="search-input" type="search" placeholder="Quick Find" />
              </label>
            </form>
            <div className="site-header_status">
              <img src="check_icon.png" alt="Status" />
              <TaskCounter tasks={filteredTasks} allTasks={tasks} />
            </div>
          </header>

          <main className="site-main">
            <nav className="navbar">
              <ul>
                <li className="inbox-select">
                  <span className="nav-text">Inbox</span>
                  <span className="task-count">{filteredTasks.length}</span>
                </li>
                <li className="today-select">
                  <span>Today</span> <span className="task-count">5</span>
                </li>
                <li className="upcoming-select">
                  <span>Upcoming</span>
                </li>
              </ul>
            </nav>


            
            <section className="main-content">
              <h1>Inbox</h1>

              <TaskForm onAddTask={addTask} />
              <FilterButtons currentFilter={filter} changeFilter={setFilter} />
              <TaskList 
                tasks={filteredTasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            </section>
          </main>
      </div>
    </>
  );
}

export default App
