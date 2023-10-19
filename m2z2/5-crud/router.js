const express = require("express");

const router = express.Router();

let tasks = [
  {
    id: 1,
    title: "Work",
    text: "Go to work at 8AM",
    done: false,
  },
];

router.get("/tasks", (req, res) => {
  res.json({ tasks, itemCount: tasks.length });
});

router.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const [task] = tasks.filter((el) => el.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ message: "not found" });
  }
  res.json(task);
});

router.post("/tasks", (req, res) => {
  const { title, text } = req.body;
  const id = tasks.length + 1;
  const task = {
    id,
    title,
    text,
    done: false,
  };
  tasks.push(task);
  res.status(201).json({ id });
});

router.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, text } = req.body;

  const task = tasks.find((el) => el.id === parseInt(id));
  if (task) {
    task.title = title;
    task.text = text;
    res.status(200).json(id);
  } else {
    const task = {
      id: parseInt(id),
      title,
      text,
      done: false,
    };
    tasks.push(task);
    res.status(201).json(id);
  }
});

router.patch("/tasks/:id/status", (req, res, next) => {
  const { id } = req.params;
  const { done } = req.body;
  const task = tasks.find((el) => el.id === parseInt(id));
  if (task) {
    task.done = done;
    res.status(200).json(task);
  } else {
    res.status(404).json({ messsage: "not found" });
  }
});

router.post("/tasks", (req, res) => {
  const { title, text } = req.body;
  const id = tasks.length + 1;
  const task = {
    id,
    title,
    text,
    done: false,
  };
  tasks.push(task);
  res.status(201).json({ id });
});

router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const newTasks = tasks.filter((el) => el.id !== parseInt(id));
  tasks = [...newTasks];
  res.status(204).json();
  // res.status(404).json({ message: "not found" });
});

module.exports = router;
