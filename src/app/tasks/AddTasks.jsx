import React, { useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, updateTask } from "../../redux/action";
import TaskForm from "../../components/taskForm/TaskForm";
import TasksList from "../../components/taskForm/TasksList";

const AddTasks = () => {
  const [task, setTask] = useState({
    id: '' ,
    name: "",
    description: "",
    user: "",
    date: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);

  const handleDelete = (i) => {
    dispatch(removeTask({ id: i }));
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    console.log(task);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((preTasks) => ({
      ...preTasks,
      [name]: value,
    }));
  };

  return (
    <div className="addTasks">
      <TaskForm
        handleChange={handleChange}
        handleDelete={handleDelete}
        task={task}
        handleSubmit={handleSubmit}
      />
      <TasksList
        show={show}
        tasks={tasks}
        handleShow={handleShow}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AddTasks;
