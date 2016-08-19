var createName = function(first, last) {
	return first + " " + last;
}

var askName = function() {
	while(first !== 'Bob' && last !== 'Jones') {
		var first = prompt('What is your first name?');
		var last = prompt('What is your last name?');
		var fullName = createName(first, last);
		alert(fullName); 
	}	
}

askName();

var asker = document.getElementById('asker');
asker.onclick = askName;
