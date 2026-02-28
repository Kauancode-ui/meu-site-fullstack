function validateTask(req, res, next) {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title é obrigatório' });
  }

  next();
}

module.exports = validateTask;