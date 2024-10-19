// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create a route that sends a JSON response
app.get('/comments', (req, res) => {
  res.json([
    {
      id: 1,
      username: 'kunal',
      comment: 'I am enjoying learning Node.js'
    }
  ]);
});
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});