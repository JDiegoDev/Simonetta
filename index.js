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

app.get('/api/testpdf', (req, res) => {
  console.log('we got to the server!!  with: ', req.query);
    const pdfFilepath = './files/test.pdf';
    console.log('pdfFilepath', pdfFilepath);
    const src = fs.createReadStream(pdfFilepath);

    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename=test.pdf'
    });

    src.pipe(res);
})

app.use(express.static(path.join(__dirname, 'client/build')));

//start server
app.listen(port, (req, res) => {
  console.log( `App listening on port: ${port}`);
})