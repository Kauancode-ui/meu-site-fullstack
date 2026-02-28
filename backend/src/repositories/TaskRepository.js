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

async update(id, { title }) {
  const query = `
    UPDATE tasks
    SET title = $1
    WHERE id = $2
    RETURNING *;
  `;

  const values = [title, id];

  const result = await pool.query(query, values);

  return result.rows[0];
}

async delete(id) {
  const query = `DELETE FROM tasks
  WHERE id= $1 RETURNING *;`;

  const result = await pool.query(query, [id]);

  return result.rows[0];
}

async updateCompleted(id, { completed }){
  const query = `UPDATE tasks
  SET completed = $1
  WHERE id = $2
  RETURNING  *;`;

  const values = [completed, id];
  const result = await pool.query(query, values);
  return result.rows[0];
}

}



module.exports = new TaskRepository();