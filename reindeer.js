var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

var pairing = function() {
	var pairing = " ";
	for (var i = 0; i <= reindeer.length; i++) {
		pairing = pairing + "<li>" + colors[i] + " " + reindeer[i] + "</li>";

	}
	return pairing
}




hohohoElement.innerHTML = pairing();
