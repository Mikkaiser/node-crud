//IMPORTS
import express from 'express';
import handlebars from 'express-handlebars';
import { Payment } from '../models/Payment.js';

//INSTANCES
const app = express();

//HANDLEBARS INITS
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//BODY-PARSER (deprecated-> The code below is the up to date way) INITS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//ROUTES
app.get('/payment-list', (req, res) =>{
  res.render('payment_list');
});

app.get('/register-payment', (req, res) => {
  res.render('register_payment');
});

app.post('/add-payment', (req, res) => {

  Payment.create({
    name: req.body.name,
    value: req.body.value
  }).then(()=>{
    console.log('Payment registered successfully');
  }).catch((error)=>{
    console.error('Failure to register payment. Error: ' + error);
  });

  // res.send('Name: ' + req.body.name + "<br>Valor: " + req.body.value '+ '<br>');
});


app.listen(8000);