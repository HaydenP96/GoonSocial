const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const posts = [
    (post1 = {
      user: 'Hayden Peterson',
      description: 'This is post 1',
      date: new Date(),
    }),
    (post2 = {
      user: 'Abigail Dawid',
      description: 'This is post 2',
      date: new Date(),
    }),
  ];

  res.render('index', { auth: 'true', posts: posts });
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.listen(3000);
