//linking to express and mysql
const express = require('express');
const mysql = require('mysql2');

// assigning port variable
const PORT = process.env.PORT || 3001;
//variable express
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// variable to connect to mysql
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

// counting in stock and not in stock
db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log(results);
});

// total in section, max quantity, min quantity and avg quantity
db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
});

//catch all for incoming requests for routes that aren't defined. 
app.use((req, res) => {
  res.status(404).end();
});

// port server is running on.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
