/** @format */

// cors, body-parser,mysql,express

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL user
  password: '', // Replace with your MySQL password
  database: 'aroma', // Replace with your MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Handle signup route
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send('Please provide all required fields.');
  }

  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Server error');
    }
    console.log('result', result);
    res
      .status(201)
      .send({
        message: 'User registered successfully',
        userData: { name, email },
      });
  });
});

// Start the server
const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
