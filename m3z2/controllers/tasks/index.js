const {
  fetchTasks,
  fetchTask,
  insertTask,
  updateTask,
  removeTask,
} = require("./helpers");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await fetchTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

const getTask = async (req, res, next) => {
  try {
    const task = await fetchTask(req.params.id);
    if (task) {
      res.json({ ...task.toObject(), html: task.htmlify() });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const createTask = async (req, res, next) => {
  const { title, text } = req.body;
  try {
    const result = await insertTask({ title, text });
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const putTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateTask({ id, toUpdate: req.body, upsert: true });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const patchTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateTask({ id, toUpdate: req.body });
    if (!result) {
      next();
    } else {
      res.json(result);
    }
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    await removeTask(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  putTask,
  patchTask,
  deleteTask,
};
