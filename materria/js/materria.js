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

/*accordion*/
var accordion = document.getElementsByClassName("collapsible");

for (var i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var dropPanel = this.nextElementSibling;
		if (dropPanel.style.maxHeight) {
			dropPanel.style.maxHeight = null;
		} else {
			dropPanel.style.maxHeight = dropPanel.scrollHeight + "px";
		}
	});
}