import Sequelize from 'sequelize';
import { sequelize } from './db.js';

export const Payment = sequelize.define('payments', {
  name: {
    type: Sequelize.STRING
  },
  value: {
    type: Sequelize.DOUBLE
  }
})

// Payment.sync({force: true});