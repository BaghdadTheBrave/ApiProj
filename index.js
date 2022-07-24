const request = require('request');
const express = require('express');
const app = express();
const { application } = require('express');

app.get('/rate',(UserReq,UserRes)=>{
    
    request('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=uah', { json: true }, (err, MyRes, body) => {
        if (err) { return console.log(err); }
        console.log(body.bitcoin.uah);
        UserRes.status(200).send((body.bitcoin.uah).toString());
    });
    
});

app.listen(3000, () => console.log('listening on port 3000...'))