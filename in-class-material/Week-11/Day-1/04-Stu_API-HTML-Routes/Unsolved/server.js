// TODO: Import express
const express = require('express');
const terms = require('./terms.json')

// TODO: Import 'terms.json' file
const PORT = 3001;

// TODO: Initialize app variable
const app = express();

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/api', (req, res) => {
  res.json(
    terms[1]
  )

})

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
// app.use(express.static(''));


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
