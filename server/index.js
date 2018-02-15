//no access to es2015 modules
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User')

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Server is listening on port: ${PORT}`);
console.log('Visit:', `http://localhost:${PORT}`);
