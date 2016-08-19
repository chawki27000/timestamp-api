var express = require('express');
var transform = require('./transform')

var app = express();

app.get('/:value', function (req, res) {

    
    // spliting paramters
    var spliting = req.params.value.split(',')

    //spiliting mounth, day
    var mounth_day = spliting[0].split(' ')


    //converting to number
    var day = parseInt(mounth_day[1])
    var mounth = transform.mounthToNum(mounth_day[0])
    var year = parseInt(spliting[1])

    console.log('The official date : '+year+' - '+mounth+' - '+day)

});

app.listen(3000);
