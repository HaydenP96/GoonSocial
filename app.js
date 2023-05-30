const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', { auth: 'false' });
});

app.listen(3000);
