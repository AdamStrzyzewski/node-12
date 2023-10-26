const Task = require("../../models/Task");

// const fetchTasks = () => Task.find().lean();
const fetchTasks = () => Task.getAll();

// const fetchTask = (id) => Task.findOne({ _id: id });
const fetchTask = (id) => Task.findById(id);

const insertTask = ({ title, text }) => Task.create({ title, text });
// const insertTask = ({ title, text }) =>
//   Task.insertOne({ title, text }, { runValidators: true, strict: "throw" });

// const updateTask = async ({ id, toUpdate }) => {
//   const task = await Task.findById(id);
//   if (!task) {
//     return null;
//   }
//   Object.keys(toUpdate).forEach((updateKey) => {
//     task[updateKey] = toUpdate[updateKey];
//   });

//   await task.save();

//   return task;
// };

const updateTask = async ({ id, toUpdate, upsert = false }) =>
  Task.findOneAndUpdate(
    { _id: id },
    { $set: toUpdate },
    { new: true, runValidators: true, strict: "throw", upsert }
  );

// const removeTask = (id) => Task.findByIdAndDelete(id);
const removeTask = (id) => Task.deleteOne({ _id: id });

module.exports = { fetchTasks, fetchTask, insertTask, updateTask, removeTask };
