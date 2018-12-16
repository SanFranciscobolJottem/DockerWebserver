const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Szevasz Gyula!');
});

app.listen(8888, () => {
 console.log('A szerver elindult a 8888 porton.');
});
