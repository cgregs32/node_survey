//no access to es2015 modules
const express = require('express');
const app = express();

//create route handler and associate with given route
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(5000);
