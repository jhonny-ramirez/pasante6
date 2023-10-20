const express = require('express');
const app = express();
const port = 3005;

app.get('/test', (req, res) => {
  res.json({msg: 'Hello world!'});
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});

module.exports = app;
