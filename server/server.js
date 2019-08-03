const app = require('./app.js');

const host = process.env.host || '0.0.0.0';
const port = process.env.port || '8080';

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on ${host}:${port}`);
});
