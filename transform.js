exports.monthToNum = function (str) {
	
	if (str.toUpperCase() === 'JANUARY'){
		return 1;
	}
	else if (str.toUpperCase() === 'FEBRUARY'){
		return 2;
	}
	else if (str.toUpperCase() === 'MARCH'){
		return 3;
	}
	else if (str.toUpperCase() === 'APRIL'){
		return 4;
	}
	else if (str.toUpperCase() === 'MAY'){
		return 5;
	}
	else if (str.toUpperCase() === 'JUNE'){
		return 6;
	}
	else if (str.toUpperCase() === 'JULY'){
		return 7;
	}
	else if (str.toUpperCase() === 'AUGUST'){
		return 8;
	}
	else if (str.toUpperCase() === 'SEPTEMBER'){
		return 9;
	}
	else if (str.toUpperCase() === 'OCTOBER'){
		return 10;
	}
	else if (str.toUpperCase() === 'NOVEMBER'){
		return 11;
	}
	else if (str.toUpperCase() === 'DECEMBER'){
		return 12;
	}
	else {
		return 0;
	}
}

exports.numToDate =function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = month + ' '+ date + ', ' + year ;
  return time;
}