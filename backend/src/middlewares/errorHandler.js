function errorHandler(err, req, res, next) {
  console.error('Erro capturado:', err);
  return res.status(500).json({ error: 'Erro interno do servidor' });
}

module.exports = errorHandler;