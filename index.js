var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
var satellite = JSON.parse(data.body.replace('/[|]/g',''))
console.log(satellite[0].name)
  document.body.innerHTML = example({ name: satellite[0].name });
  console.log(data)

})

xhr.get('https://api.wheretheiss.at/v1/satellites/' + satellite.id, function(err, data) {
  if (err) console.log(err) // do something
console.log(data.body)
})
