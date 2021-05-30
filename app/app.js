// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';

// //Importing Mysql package
// import mysql from 'mysql';
// //

// const __fileName = fileURLToPath(import.meta.url);
// const __dirName = path.dirname(__fileName);
// const app = express();

// //DB CONNECTION
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'node_db'
// });
// //

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   } 
// });



//DELETE-------------------------------

// connection.query("DELETE FROM users WHERE id = 2;", (err) =>{
//   err ? console.log('Error to delete data') 
//   : console.log('Successful to delete user');
// });


//UPDATE-------------------------------

// connection.query("UPDATE users SET name = 'Mikael Ribeiro' WHERE id = 1;", (err, result) =>{
//   err ? console.log('Error to update data') 
//   : console.log('Successful to update users');
// });


//INSERT-------------------------------

// connection.query("INSERT INTO users (name, email) VALUES ('Mikkaiser', 'mikael.r.simoes@hotmail.com');", (err, result) => {
//   err ? console.log('Error to insert data') 
//   : console.log('Successful to insert users');
// });


//SELECT-------------------------------
 
// connection.query('SELECT * FROM users', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });



//ROUTES-------------------------------

// app.get('/', (req, res) => {
//   res.sendFile(__dirName + '/src/index.html');
//   console.log('Server is running');
// })

// app.get('/about-corporation', (req, res) => {
//   res.sendFile(__dirName + '/src/about-corporation.html');
//   console.log('Server is running');
// })

// app.get('/blog', (req, res) => {
//   res.send('Blog page');
// });

// app.get('/contact', (req, res) => {
//   res.send('Contact Page');
// });

// app.listen(3000);