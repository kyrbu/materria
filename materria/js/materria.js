/*JavaScript*/
/*sidenav*/
var sidebarOpen = document.getElementById("sidebar-open");

sidebarOpen.onclick = function () {
	var sidebarLeft = document.getElementById("sidebar").style.left;
	document.getElementById("sidebar").style.left = "0";

 	var sidebarOverlay = document.createElement("div");
	sidebarOverlay.className = "overlay";
	sidebarOverlay.id = "overlay";
	document.body.appendChild(sidebarOverlay);

	var sidebarClose = document.getElementById("overlay");
	sidebarClose.onclick = function () {
		document.getElementById("sidebar").style.left = sidebarLeft;
		document.getElementById("overlay").parentNode.removeChild(this);
	} 
}
/*sidenav accordion*/
/*  var accordionOpen = document.getElementById("accordion-open");

 accordionOpen.onclick = function () {
	var accordionDisp = document.getElementById("panel").style.display;
    var accordionDisp = document.getElementById("panel").style.maxHeight;  
	document.getElementById("panel").style.display = "block";
	document.getElementById("panel").style.maxHeight = "px";
	} */ 
	var accordion = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel1 = this.nextElementSibling;
			if (panel1.style.maxHeight){
			panel1.style.maxHeight = null;
			} else {
			panel1.style.maxHeight = panel1.scrollHeight + "px";
			} 
		});
	}