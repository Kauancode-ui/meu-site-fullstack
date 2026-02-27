require('dotenv').config();

const app = require('./app');
const pool = require('./config/database');

const PORT = process.env.PORT || 3000;

pool.query('SELECT NOW()')
  .then(res => {
    console.log('Banco conectado:', res.rows[0]);

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar no banco:', err);
  });