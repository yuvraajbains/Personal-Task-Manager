const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    required: true
  },
  deadline: {
    type: Date // 🆕 New field for deadlines
  },
  completed: {
    type: Boolean,
    default: false // 🆕 New field for task completion status
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
