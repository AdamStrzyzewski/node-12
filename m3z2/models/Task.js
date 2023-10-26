const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: 5,
      maxlength: 70,
      required: [true, "Set your task title"],
    },
    text: {
      type: String,
      minlength: 3,
      maxlength: 170,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

taskSchema.index({ title: 1 }); // simple
taskSchema.index({ title: 1, text: -1 }); // complex

// { orderId: 1, orderDate: -1, price: 1 } // ESR - Equality, Sort, Range
// find({ orderId: '432', price: { $gte: 10, $lte: 50 } }).sort({orderDate: -1})

taskSchema.statics.getAll = function () {
  return Task.find().lean();
};

taskSchema.methods.htmlify = function () {
  return `<h1>${this.title}</h1><p>${this.text}</p>`;
};

const Task = mongoose.model("task", taskSchema, "tasks");

module.exports = Task;
