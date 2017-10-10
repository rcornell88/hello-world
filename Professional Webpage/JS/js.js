//toggle function for the feedback form 
function hideElement() {
	var x = document.getElementById("feedbackform");
	
	if (x.style.display === "none") {
		x.style.display = "block";
	}else {
		x.style.display = "none";
	}
	
}
//writeIn function for when the feedback form is submitted
function thankYouMessage() {
	document.writeIn(
		"<h1> Thanks for the feedback!</h1>");
}