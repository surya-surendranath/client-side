var xhr = require('xhr')
var example = require('./views/example.hbs')
var whereisiss = require('./views/whereisiss.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err)

    var satellite = JSON.parse(data.body.replace('/[|]/g',''))

    console.log(satellite[0].name)
    document.body.innerHTML = example({ name: satellite[0].name });
    console.log(data)

    document.getElementById('button').addEventListener('click',function(){
      xhr.get('https://api.wheretheiss.at/v1/satellites/' + satellite[0].id, function(err, data) {
          if (err) console.log(err) // do something
          console.log("hello", (err) ? err:data)
          var iss = JSON.parse(data.body)
          document.getElementById('paragraph').innerHTML =whereisiss(iss)
})
  })

})

xhr.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=AIzaSyADrKamh9JljunD_hq_FsCAYxYmuohKN70', function(err, data) {

  if (err) console.log(err)
    document.body.innerHTML = example({ google: data });
    console.log(data)
  })
