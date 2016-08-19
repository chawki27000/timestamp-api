var express = require('express');
var transform = require('./transform')

var app = express();

app.get('/:value', function (req, res) {

    console.log('REQUEST : '+req.params.value)
    // spliting paramters
    var spliting = req.params.value.split(',')

    //spiliting mounth, day
    var mounth_day = spliting[0].split(' ')


    //converting to number
    var day = parseInt(mounth_day[1])
    var mounth = transform.mounthToNum(mounth_day[0])
    var year = parseInt(spliting[1])

    //convert to unix timestamp
    var date_str = year+'.'+mounth+'.'+day
    console.log('date formater : '+date_str)
    var unixtime = new Date(date_str).getTime() / 1000

    console.log('unixtime : '+unixtime)

});

app.listen(3000);
