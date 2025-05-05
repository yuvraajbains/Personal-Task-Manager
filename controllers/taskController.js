const Task = require('../models/Task'); 

// Create Task
const createTask = async (req, res) => {
  const { title, description, deadline } = req.body; 

  try {
    const newTask = new Task({
      title,
      description,
      deadline, 
      username: req.user
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get All Tasks for User (sorted by deadline)
const getTasks = async (req, res) => {
  try {
    const userTasks = await Task.find({ username: req.user }).sort({ deadline: 1 });
    res.json(userTasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Task
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, deadline, completed } = req.body; 

  try {
    const task = await Task.findOne({ _id: id, username: req.user });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Update fields if provided
    task.title = title || task.title;
    task.description = description || task.description;
    task.deadline = deadline || task.deadline; 
    if (completed !== undefined) {
      task.completed = completed; 
    }

    await task.save();

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOneAndDelete({ _id: id, username: req.user });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.json({ message: 'Task deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
