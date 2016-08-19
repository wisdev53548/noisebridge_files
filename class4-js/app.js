var shouldShowAlerts = confirm("Do you want this to work?");

if (shouldShowAlerts) {
	alert("Yay, my script ran!");
	alert("This worked because \"I said it would!\"");
}

shouldShowAlerts = false;

if (shouldShowAlerts) {
	alert("They should never see this...");
}

var favoriteColor = prompt("What's your favorite color?");

if (favoriteColor === "blue") {
	alert("Wow how unique");
} else if (favoriteColor === "periwinkle") {
	alert("How exotic!!!");
}  else {
	alert("Mine's blue!");
}