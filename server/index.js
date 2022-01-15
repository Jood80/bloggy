require('env2')('./config.env');
const app = require('./app.js');


console.log('db', process.env.DATABASE_URL);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}!!`);
});