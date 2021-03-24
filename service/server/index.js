const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const token = "c265225783aafa0b1a2edab2cc699d60a940acb0";


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/../public'));

app.use('',routes)




app.listen(3000, () => {
  console.log(`listening on port 3000`);
})
