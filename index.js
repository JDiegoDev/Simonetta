const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

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
  if (process.env.NODE_ENV === 'production') {
    return res.redirect("https://" + req.headers.host + req.url);
 }
 
 res.send('/');
})


app.use(express.static(path.join(__dirname, 'client/build')));

//start server
app.listen(port, (req, res) => {
  console.log( `App listening on port: ${port}`);
})