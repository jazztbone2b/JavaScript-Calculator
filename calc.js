//coded by Collin Banks
//console log the data, push it to an array and execute it
let total = [];

let input = document.querySelector('#userinput');
let keepLeft = $('#userinput');

//*******************number button functionality*******************//
$('#one').click(function(){
	$('#one').css('color', '#80cbc4');
	input.innerHTML += '1';
	keepLeft.scrollLeft(900000000);
	total.push('1');

	setTimeout(function(){
		$('#one').css('color', 'white');
	}, 200);
});

$('#two').click(function(){
	$('#two').css('color', '#80cbc4');
	input.innerHTML += '2';
	keepLeft.scrollLeft(900000000);
	total.push('2');

	setTimeout(function(){
		$('#two').css('color', 'white');
	}, 200);
});

$('#three').click(function(){
	$('#three').css('color', '#80cbc4');
	input.innerHTML += '3';
	keepLeft.scrollLeft(900000000);
	total.push('3');

	setTimeout(function(){
		$('#three').css('color', 'white');
	}, 200);
});

$('#four').click(function(){
	$('#four').css('color', '#80cbc4');
	input.innerHTML += '4';
	keepLeft.scrollLeft(900000000);
	total.push('4');

	setTimeout(function(){
		$('#four').css('color', 'white');
	}, 200);
});

$('#five').click(function(){
	$('#five').css('color', '#80cbc4');
	input.innerHTML += '5';
	keepLeft.scrollLeft(900000000);
	total.push('5');

	setTimeout(function(){
		$('#five').css('color', 'white');
	}, 200);
});

$('#six').click(function(){
	$('#six').css('color', '#80cbc4');
	input.innerHTML += '6';
	keepLeft.scrollLeft(900000000);
	total.push('6');

	setTimeout(function(){
		$('#six').css('color', 'white');
	}, 200);
});

$('#seven').click(function(){
	$('#seven').css('color', '#80cbc4');
	input.innerHTML += '7';
	keepLeft.scrollLeft(900000000);
	total.push('7');

	setTimeout(function(){
		$('#seven').css('color', 'white');
	}, 200);
});

$('#eight').click(function(){
	$('#eight').css('color', '#80cbc4');
	input.innerHTML += '8';
	keepLeft.scrollLeft(900000000);
	total.push('8');

	setTimeout(function(){
		$('#eight').css('color', 'white');
	}, 200);
});

$('#nine').click(function(){
	$('#nine').css('color', '#80cbc4');
	input.innerHTML += '9';
	keepLeft.scrollLeft(900000000);
	total.push('9');

	setTimeout(function(){
		$('#nine').css('color', 'white');
	}, 200);
});

$('#zero').click(function(){
	$('#zero').css('color', '#80cbc4');
	input.innerHTML += '0';
	keepLeft.scrollLeft(900000000);
	total.push('0');

	setTimeout(function(){
		$('#zero').css('color', 'white');
	}, 200);
});

$('#period').click(function(){
	$('#period').css('color', '#80cbc4');
	input.innerHTML += '.';
	keepLeft.scrollLeft(900000000);
	total.push('.');

	setTimeout(function(){
		$('#period').css('color', 'white');
	}, 200);
});

//*******************OPERATORS*******************//
$('#divide').click(function(){
	$('#divide').css('color', '#616161');

	//makes sure an equation can't start with an operator
	if(input.innerHTML === ''){
		alert('Please start with a number.');
	} else{
		input.innerHTML += '÷';
		keepLeft.scrollLeft(900000000);
		total.push('/');
	}

	setTimeout(function(){
		$('#divide').css('color', 'white');
	}, 200);
});

$('#times').click(function(){
	$('#times').css('color', '#616161');

	//makes sure an equation can't start with an operator
	if(input.innerHTML === ''){
		alert('Please start with a number.');
	} else{
		input.innerHTML += 'x';
		keepLeft.scrollLeft(900000000);
		total.push('*');
	}

	setTimeout(function(){
		$('#times').css('color', 'white');
	}, 200);
});

$('#minus').click(function(){
	$('#minus').css('color', '#616161');

	//makes sure an equation can't start with an operator
	if(input.innerHTML === ''){
		alert('Please start with a number.');
	} else{
		input.innerHTML += "–";
		keepLeft.scrollLeft(900000000);
		total.push('-');
	}

	setTimeout(function(){
		$('#minus').css('color', 'white');
	}, 200);
});

$('#plus').click(function(){
	$('#plus').css('color', '#616161');

	//makes sure an equation can't start with an operator
	if(input.innerHTML === ''){
		alert('Please start with a number.');
	} else{
		input.innerHTML += '+';
		keepLeft.scrollLeft(900000000);
		total.push('+');
	}

	setTimeout(function(){
		$('#plus').css('color', 'white');
	}, 200);
});

//delete function
$('#delete').click(function(){
	$('#delete').css('color', '#616161');
	$('#userinput').html('');

	total = [];
	console.log(total);
	//location.reload();
	setTimeout(function(){
		$('#delete').css('color', 'white');
	}, 200);
});

//this function will find the value of the array taken from the input field
$('#equals').click(function(){
	$('#equals').css('color', '#80cbc4');
	$('#userinput').html();
	
	//convert the array of strings to an array of one string
	let x = total.join('');
	//console.log(x);

	//convert the array to a string
	//eval takes the string and solves it using built in math functions
	let finalAns = eval(x.toString());
	//console.log(finalAns);

	//write the answer to the input field
	input.innerHTML = finalAns;

	//empty the array
	total = [];

	//push the final value to the array so the user can continue working with that number
	total.push(finalAns);
	//console.log(total);

	setTimeout(function(){
		$('#equals').css('color', 'white');
	}, 200);
});


