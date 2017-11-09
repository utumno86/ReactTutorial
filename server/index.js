const express = require('express');
require('./services/passport.js');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');

mongoose.connect(keys.mongo_uri);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
