var xhr = require('xhr')
var example = require('./views/example.hbs')
var whereisiss = require('./views/whereisiss.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
var satellite = JSON.parse(data.body.replace('/[|]/g',''))
console.log(satellite[0].name)
  document.body.innerHTML = example({ name: satellite[0].name });
  console.log(data)



document.getElementById('button').addEventListener('click',function(){
  xhr.get('https://api.wheretheiss.at/v1/satellites/' + satellite[0].id, function(err, res) {
  if (err) console.log(err) // do something
console.log("hello", (err) ? err:res)
var iss =JSON.Parse(res.body)
document.getElementById('paragraph').innerHTML =whereisiss(iss)
})
})

})
