const request = require('request');

request('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=uah', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.bitcoin.uah);
});