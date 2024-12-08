const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/add-review', (req, res) => {
  const { name, email } = req.body;
  const data = `${name},${email}\n`;

  fs.appendFile('reviews.csv', data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to CSV file');
    } else {
      console.log('Data added to reviews.csv:', data);
      res.status(200).send('Data added successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
