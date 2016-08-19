var express = require('express');
var transform = require('./transform')

var app = express();

var myRegexDate = /^[a-zA-Z]{3,9} (0[1-9]|1[0-9]|2[0-9]|3[0-1]|[1-9]), [0-9]{1,4}$/
var myRegexNum = /^[0-9]{1,}$/


app.get('/:value', function (req, res) {

    console.log('REQUEST : '+req.params.value)

    //testing
    if (myRegexDate.test(req.params.value)){
    	//TODO : 1st feature
    	console.log('1st FEATURE  : Date -> UnixTime')
    	// spliting paramters
        var spliting = req.params.value.split(',')

        //spiliting month, day
        var month_day = spliting[0].split(' ')


        //converting to number
        var day = parseInt(month_day[1])
        var month = transform.monthToNum(month_day[0])
        var year = parseInt(spliting[1])

        //convert to unix timestamp
        var date_str = year+'.'+month+'.'+day
        console.log('date formater : '+date_str)
        var unixtime = new Date(date_str).getTime() / 1000

        console.log('unixtime : '+unixtime)
    }

    else if(myRegexNum.test(req.params.value)){
    	//TODO : 2nd feature
    	console.log('2nd FEATURE  : UnixTime -> Date')
    }
    else{
    	data = {
    		'unix': null,
    		'natural': null
    	}

    	res.json(data)
    }


});

app.listen(3000);
