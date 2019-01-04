const d3 = require('d3-fetch');

d3.csv('./output.csv')
  .then((data) => {
    console.log(data);
  })
