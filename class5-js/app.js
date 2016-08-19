// var shouldShowAlerts = confirm("Do you want this to work?");

// var numberOfTimes = 0;

// while (numberOfTimes < 3) {
// 	alert("Yay, my script ran!");
// 	alert("This worked because \"I said it would!\"");
// 	alert("This is the next thing to do");
// 	numberOfTimes += 1;	
// }

// for (var i = 0; i < 3; i += 1) {
// 	alert("Yay, my script ran!");
// 	alert("This worked because \"I said it would!\"");
// 	alert("This is the next thing to do");
// 	numberOfTimes += 1;	
// }

// shouldShowAlerts = false;

// if (shouldShowAlerts) {
// 	alert("They should never see this...");
// }

// // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// // arr[0] === 1;   

// // arrayOfStrings[0] === "hello";


// var favoriteColor = prompt("What's your favorite color?");
// var tomsFavoriteColors = ['blue', 'periwinkle', 'rainbow', 'pink', 'goldenrod']

// if (tomsFavoriteColors.indexOf(favoriteColor) > -1) {
// 	alert("Mine, too!");
// } else {
// 	alert("Mine's blue!");
// }

var arrayOfStrings = ["hello", "world", "my", true, "name", "etc."];
var arrayOfStuff = [1, "hello", true, alert, undefined];


// for (var i = 0; i < arrayOfStrings.length; i += 1) {
// 	if (typeof arrayOfStrings[i] === "string") {
// 		console.log(arrayOfStrings[i]);
// 	}
// }


var obj = {
	0: 'my',
	1: 'name',
	2: 'is',
	name: 'Jeffrey',
	age: 30,
	location: 'Berkeley',
	siblings: [
		{
			name: 'Lily',
			age: 26,
			location: 'Brooklyn'
		},
		{
			name: 'Someone else',
			age: '??????',
			location: 'the great beyond....'
		}
	]
}

obj['name'] === 'Jeffrey';
obj[0] === 'my';

obj['name'] = 'Bob';
arrayOfStuff[arrayOfStuff.length] = obj;
arrayOfStuff.push(obj);


var sayHello = function () {
	console.log('hello!');
}

function sayGoodbye() {
	console.log('goodbye!');
}

function say(thingToSay) {
	alert(thingToSay)
}

var giveMeSomethingCreepy = function(message) {
	return message + ', m\'lady';
}

var makeSum = function(addend1, addend2) {
	return addend1 + addend2;
}

var myName = 'Jeffrey';
var screwUpMyName = function() {
	var myName = 'Dumbers';
	console.log(myName)
}