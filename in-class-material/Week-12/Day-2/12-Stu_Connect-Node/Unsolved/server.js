// connecting to express and mysql
const express = require('express');
const mysql = require('mysql2');

// port variable (heroku) and express variable
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//MySql Connection Information
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

//query database
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// if it doesn't fine request
app.use((req, res) => {
  res.status(404).end();
});

// showing port link
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
