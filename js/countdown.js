var countdown = document.getElementById("countdown");
var countDownDate = new Date("Nov 4, 2019 18:30:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	 document.getElementById("remaining").innerHTML = "There are " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
	if(distance < 0) {
		clearInterval(x);
		document.getElementById("remaining").innerHTML = "";
		countdown.innerHTML = "🎉 Event is now Occuring! 🎉";
	}
}, 1000);