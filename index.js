var xhr = require('xhr')
var example = require('./views/example.hbs')
var whereisiss = require('./views/whereisiss.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, res) {
  if (err) console.log(err) // do something

    console.log(res.body)
  var satellite = JSON.parse(res.body.replace('/[|]/g',''))
  console.log(satellite[0].name)
  document.body.innerHTML = example({ name: satellite[0].name });
  console.log(res)



  document.getElementById('button').addEventListener('click',function(){
    xhr.get('https://api.wheretheiss.at/v1/satellites/' + satellite[0].id, function(err, res) {
  if (err) console.log(err) // do something
    console.log("hello", (err) ? err:res)
  var iss = JSON.parse(res.body)
  document.getElementById('paragraph').innerHTML =whereisiss(iss)
})
  })

})
