//Importing Sequelize
import Sequelize from 'sequelize';

//Instantiating Sequelize
const sequelize = new Sequelize('node_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

//Establishing connection to database
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');

} catch (error) {
  console.error('Unable to connect to the database:', error);
}

//Creating the Payment table reference
const Payment = sequelize.define('payments', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  value: {
    type: Sequelize.DOUBLE
  }
});

//Creating Payment Table
Payments.sync({force: true});

//Inserting data on Payment table
Payment.create({
    name: 'Energy',
    value: 400
});