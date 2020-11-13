const express = require('express');

const app = express();

// Use this middleware to enforce https traffic
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {
    res.redirect(301, `https://${req.headers.host}/${req.url}`)
  }

  next();
});

app.get('/', (req, res) => {
  res.send('henlo!')
});

app.listen(3000, () => {
  console.log('server started');
});