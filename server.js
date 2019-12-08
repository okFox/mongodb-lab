require('dotenv').config();
require('./lib/utils/connect').connect();
const app = require('./lib/app');


app.listen('7890', () => {
  console.log('Server connected on port 7890');
});
