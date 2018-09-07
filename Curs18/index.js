var d = new Date();

console.log(d);

var d1 = new Date(2015, 10, 10, 22);
console.log(d1);

var d2 = new Date(321321);
console.log(d2);

var d3 = new Date("12-03-2013"); //formatul american : luna/zi./an
console.log(d3);

var date = new Date(2001, 08, 11, 11, 20);
console.log(date);
var year = date.getFullYear();
console.log(year);
date.setFullYear(1999);
var year = date.getFullYear();
console.log(year);
//getTime() setTime()
var today = new Date();
var time = today.getTime();
console.log(time);
console.log(time / (1000 * 60 * 60 * 24 * 365));
today.setTime(time - (1000 * 60 * 60));
console.log(today);

//random
var z = Math.random();
console.log(z);
z = z * 1000;
if(z > 500) {
	console.log(z + 'was in first 50%');
}else{
	console.log(z + 'was in last 50%');
}

//Math.min and Math.max
var max = Math.max(10, 30, 50, 222, 921, 1450, 22, 10);
console.log(max);

function exe11() {
	var euro = prompt('How many euros are you exchanging?');
	var rate = prompt('What is the exchange rate?');
	var dollars = (euro * rate) / 100;
	document.getElementById('dollars').innerHTML = dollars;
}
//exe11();
function exe12(){
	var a = prompt('Enter the principal: ');
	var b = prompt('Enter the rate of interest: ');
	var c = prompt('Enter the number of years: ');
	document.getElementById('exe12_1').innerHTML = a;
	document.getElementById('exe12_2').innerHTML = b;
	document.getElementById('exe12_3').innerHTML = c;
	document.getElementById('exe12_4').innerHTML = 'After ' + c + 'years at ' + b + ', the investment will be worth ' + a * (1 + ((b / 100) * c)) + ' $ ';
}
//exe12();
function exe14(){
	var ammount = document.getElementById('exe14_in1').value;
	var state = document.getElementById('exe14_in2').value;
	console.log(ammount);
	console.log(state);
	if (ammount !== "" && parseInt(ammount)) {
		document.getElementById('exe14_1').innerHTML= ammount;
		document.getElementById('exe14_2').innerHTML= state;
		document.getElementsByClassName('result')[0].style.display = "block";
	}else{
		document.getElementsByClassName('result')[0].style.display = "none";
	}
	if (state === "WI") {
		document.getElementById('exe14_3').innerHTML = ammount;
		document.getElementById('exe14_4').innerHTML = ammount * 0.055;
		document.getElementById('exe14_5').innerHTML =parseInt(ammount) + (ammount * 0.055);
		document.getElementsByClassName('subtotal')[0].style.display = "block";
	}else{
		document.getElementById('exe14_5').innerHTML = ammount;
		document.getElementsByClassName('subtotal')[0].style.display = "none";
	}
}

function exe18(){
	var type = document.getElementById('exe18_type').value;
	var temp = document.getElementById('exe18_temp').value;
	if(temp !=="" && parseInt(temp) && type !== "") {
		if(type.toUpperCase() === "C") {
			//convert to celsius
			var temp_final = (temp - 32) * 5 / 9;
		}else{
			//conversion to farenheit
			if(temp == 0) {
				var temp_final =  32;
			} else {
				var temp_final = (temp * 9 / 5) + 32;
			}
		}
		document.getElementById('exe18_1').innerHTML = type;
		document.getElementById('exe18_2').innerHTML = temp;
		document.getElementById('exe18_3').innerHTML = temp_final;
		if(type.toUpperCase() === "C") {
			document.getElementById('exe18_4').innerHTML = "Farenheit";
		} else {
			document.getElementById('exe18_4').innerHTML = "Celsius";
		}
	}
}
function verifyConversionType() {
	var z = document.getElementById('exe18_type').value;
	if(z.toUpperCase() === "C" || z.toUpperCase() === "F") {
	}else{
		document.getElementById('exe18_type').value = "";
	}
}