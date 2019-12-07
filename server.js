require('dotenv').config();

const app = require('./lib/app');
require('./lib/utils/connect')();

app.listen('7890', () => {
  console.log('started!');
});
