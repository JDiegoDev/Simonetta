const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 5000;


//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}

//build mode
app.get('/', (req, res) => {
  res.send({ home: '/' });
})


app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static('public'));

//start server
app.listen(port, (req, res) => {
  console.log( `App listening on port: ${port}`);
})