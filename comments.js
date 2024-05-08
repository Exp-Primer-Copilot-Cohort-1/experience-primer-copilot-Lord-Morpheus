// create web server
const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer((req, res) => {
  res.end('Hello World')
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
// read file
fs.readFile('comments.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
});
// write file
const comments = {
  "comments": [
    {
      "name": "John",
      "message": "Hello"
    },
    {
      "name": "Jane",
      "message": "Hi"
    }
  ]
}
fs.writeFile('comments.json', JSON.stringify(comments, null, 2), 'utf8', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File has been written')
});
// update file
fs.readFile('comments.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const comments = JSON.parse(data)
  comments.comments.push({ "name": "Tom", "message": "Hey" })
  fs.writeFile('comments.json', JSON.stringify(comments, null, 2), 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('File has been updated')
  });
});
// delete file
fs.unlink('comments.json', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File has been deleted')
});
// Path: index.js