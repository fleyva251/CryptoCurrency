const express = require('express');

const port = 3000;

const app = express();

const Axios = require('axios');

const cors = require('cors');

app.use(cors());

app.use(express.static('dist'));

app.get('/cryptobit', (req, res) => {
  Axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(({data}) => {
      res.send(data)
  })
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on ${port}`);
});
