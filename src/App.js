import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const uptadeTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title={"Pendente"}
          onAddTask={addTask}
          taskState={"Pendente"}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={uptadeTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={"Fazendo"}
          onAddTask={addTask}
          taskState={"Fazendo"}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={uptadeTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={"Completa"}
          onAddTask={addTask}
          taskState={"Completa"}
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={uptadeTask}
          onDeleteTask={deleteTask}
        />
        {/* <TaskList title={"Fazendo"} />
        <TaskList title={"Completa"} /> */}
      </div>
    </div>
  );
}
