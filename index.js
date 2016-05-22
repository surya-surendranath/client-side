var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
console.log(data.body.name)
  document.body.innerHTML = example({ name: data.body[0].name });
})

