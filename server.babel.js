import express from 'express';

const app = express();

var path = require('path');

app.use('/', express.static('./public'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(process.env.PORT || 3000);

console.log('Server running on localhost:3000/\n');
