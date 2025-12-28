import { useEffect, useState } from "react";
import {
  fetchTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
} from "../services/api";
import "../styles/Dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch {
      setError("Unable to load tasks");
    }
  };

  const handleAddTask = async () => {
    if (!title) {
      setError("Title is required");
      return;
    }

    await createTask(title, description);
    setTitle("");
    setDescription("");
    loadTasks();
  };

  const toggleStatus = async (task) => {
    const newStatus =
      task.status === "pending" ? "completed" : "pending";

    await updateTaskStatus(task._id, newStatus);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>My Tasks</h2>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <div className="task-form">
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="task-container">
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <div className="task-card" key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>  
                {task.user?.name && (
                        <p className="task-owner">
                            Created by: <strong>{task.user.name}</strong>
                        </p>
                        )}

              <div className="task-actions">
                <button onClick={() => toggleStatus(task)}>
                  {task.status === "pending"
                    ? "Mark Completed"
                    : "Mark Pending"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </button>
              </div>

              <span className={`status ${task.status}`}>
                {task.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;


