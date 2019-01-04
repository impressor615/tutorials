const express = require('express');
const app = express();


// main page
app.get('/', (req, res) => {
  res.send('Welcome, This is instagram cralwer');
});

// get latest hashtag images
app.get('/:hashtag', (req, res) => {
  const { hashtag } = req.params;
  res.send(`hastag is ${hashtag}`);
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server is connected");
});