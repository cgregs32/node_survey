//no access to es2015 modules
const express = require('express');
const app = express();

//create route handler and associate with given route
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000
app.listen(PORT);
