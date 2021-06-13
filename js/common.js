$(document).ready(function() {
  var count = sessionStorage.getItem("itemCount");
	if(count == null) {
		count = 0;
	}
	else {
		count = parseInt(count);
	}
	$("#itemCount").text(count);
});
