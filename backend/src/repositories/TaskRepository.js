const pool = require('../config/database');

class TaskRepository {
async create({ title }) {
  const query = `
    INSERT INTO tasks (title)
    VALUES ($1) RETURNING *;
  `;

  const values = [title];

  const result = await pool.query(query, values);

  return result.rows[0];
}
}

module.exports = new TaskRepository();