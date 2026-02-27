const express = require("express");
const router = express.Router();
const pool = require('../config/database');

router.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar tasks' });
  }
});

const TaskRepository = require('../repositories/TaskRepository');

router.post('/tasks', async (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title é obrigatório' });
  }

  try {
    const task = await TaskRepository.create({ title });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar task' });
  }
});

module.exports = router;