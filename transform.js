exports.mounthToNum = function (str) {
	
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