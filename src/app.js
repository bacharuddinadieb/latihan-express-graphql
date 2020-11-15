const express = require('express');
const { PORT, VARIABLE_SECRET } = require('./config/env_variable');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  const data = [
    {
      pesan: 'halo halo test',
      sec: VARIABLE_SECRET,
      status: 200,
    },
  ];
  res.json(data);
});
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
