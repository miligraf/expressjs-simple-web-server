const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello J!</h1>');
  res.send({
    name: 'J',
    likes: [
      'Play',
      'Read'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: ':-('
  });
});

app.listen(3000);
