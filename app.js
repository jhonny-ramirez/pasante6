const express = require('express');
const app = express();
const port = 3005;

app.get('/test', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
