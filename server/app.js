const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create 

app.post('/api/recipes', (req, res) => {

});

//read

//update

//delete