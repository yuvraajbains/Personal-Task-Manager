const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const User = require('../models/User');
const Task = require('../models/Task');

// Get user profile + tasks
router.get('/', protect, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user });
    const tasks = await Task.find({ username: req.user });
    res.json({
      username: user.username,
      tasks,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete user and tasks
router.delete('/', protect, async (req, res) => {
  try {
    await User.deleteOne({ username: req.user });
    await Task.deleteMany({ username: req.user });
    res.json({ message: 'User and tasks deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
