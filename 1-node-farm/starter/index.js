import fs from 'fs';
import http from 'http';

// const readFile = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(readFile);
// // 😎 This is so cool now that I can add emoji into my work.
// // 🤝 so this works really well I can type with styled emoji in my code.
// // 🤔 will I ever not put a note into my code, prolly not!
// // 🔥 So down here we are not using asychronouse code.

// const textOut = `this is what we know about the avacado: ${readFile}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('Your file was written fooo!!!');
////////////////////////////////////////////////////////
////// 😎 HERE WE ARE CREATING OUR FIRST SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);
const server = http.createServer((req, res) => {
  const pathName = req.url;
  //   console.log(req.url);

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    //   res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, () => {
  console.log('Theserver is up and running on 8000🏃‍♂️');
});
