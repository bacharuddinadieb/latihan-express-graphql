// const dotenv = require('dotenv');

// const result = dotenv.config();
// if (result.error) {
//   throw result.error;
// }
// const { parsed: envs } = result;
// module.exports = envs;

const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  VARIABLE_SECRET: process.env.VARIABLE_SECRET,
  PORT: process.env.PORT,
};
