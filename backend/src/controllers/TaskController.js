const TaskRepository = require('../repositories/TaskRepository');

class TaskController {
  async create(req, res) {
    try {
      const task = await TaskRepository.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar task' });
    }
  }

  async update(req, res, next){
    try {
        const{ id } = req.params;
        const { title } = req.body;

        const task = await TaskRepository.update(id, { title });

        if(!task){
            return res.status(404).json({ error: 'Task não encontrada' });
        }
        res.json(task);
    } catch(error){
        next(error);
    }
  }

  async delete(req, res, next) {
  try {
    const { id } = req.params;

    const task = await TaskRepository.delete(id);

    if (!task) {
      return res.status(404).json({ error: 'Task não encontrada' });
    }

    res.json({ message: 'Task deletada com sucesso' });
  } catch (error) {
    next(error);
  }
}
}

module.exports = new TaskController();