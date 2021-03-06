const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const config = require('./db');
const userRoute = require('./routes/UserRoute');

const PORT = process.env.PORT || 5000;

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(config.db).then(
  () => { console.log("Connected") },
  err => { console.log("Cannot connect to the Database "+ err) }
);

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Set EJS as templating engine 
app.set("view engine", "ejs");

let corsOptions = {
  origin: ['http://localhost:4200', 'http://localhost:4300'],
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/api/users', userRoute);


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});