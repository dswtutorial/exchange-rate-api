var express = require('express');
var router = express.Router();
const https = require('https');


/* GET home page. */
router.get('/', function(req, res, next) {
  let html = { title: `mistakes are proof that we are trying...` };
  https.get("https://api.exchangeratesapi.io/latest?symbols=ILS&base=USD", (resp) => {
    let data = '';
  
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      const usdIls = JSON.parse(data).rates.ILS;
      html = { title: 'USD to ILS Converter', usdils:`${usdIls}`};
      res.render('index', html);

    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
    res.render('index', html);
  })

});

module.exports = router;
