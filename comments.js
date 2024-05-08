//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Path: comments.js
//Create a route to display comments
app.get('/comments', (req, res) => {
  res.send('Comments will be displayed here');
});

// Path: comments.js
//Create a route to display a single comment
app.get('/comments/:id', (req, res) => {
  res.send('Comment with id ' + req.params.id + ' will be displayed here');
});

// Path: comments.js
//Create a route to post a comment
app.post('/comments', (req, res) => {
  res.send('Comment has been posted');
});

// Path: comments.js
//Create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('Comment with id ' + req.params.id + ' has been deleted');
});

// Path: comments.js
//Create a route to update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Comment with id ' + req.params.id + ' has been updated');
});

// Path: comments.js
//Create a route to upvote a comment
app.put('/comments/:id/upvote', (req, res) => {
  res.send('Comment with id ' + req.params.id + ' has been upvoted');
});

// Path: comments.js
//Create a route to downvote a comment
app.put('/comments/:id/downvote', (req, res) => {
  res.send('Comment with id ' + req.params.id + ' has been downvoted');
});

// Path: comments.js
//Create a route to flag a comment
app.put('/comments/:id/flag', (req, res) => {
  res.send('Comment with id ' + req.params.id + ' has been flagged');
});

// Path: comments.js
//Create a route to unflag a comment
app.put('/comments/:id/unflag', (req, res) => {
  res.send('Comment with id ' + req.params.id + ' has been unflagged');
});

// Path: comments.js
//Create a route to get all flagged comments
app.get('/comments/flagged', (req, res) => {
  res.send('All flagged comments will be displayed here');
});