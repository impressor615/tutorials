const request = require('request');
const CONFIG = require('./config');

// URL needed for fectching data
const req = request.defaults({jar: true});
const loginURL = 'http://amt1224.shop.blogpay.co.kr/controller/login';
const orderURL = 'http://amt1224.shop.blogpay.co.kr/controller/order/orderlist_all';


req.post({
  url: loginURL,
  form: { userpwd: CONFIG.password },
  headers: {
    referer: loginURL,
  },
}, (err, response, body) => {
  req.get(orderURL, (err, response, body) => {
    console.log('body: ', body);
  })
})
