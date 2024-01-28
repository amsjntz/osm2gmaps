function create_link(coord_element) {
	const spl = coord_element.innerText.split(" / ");
	
	const link = document.createElement("a");
	link.href = "https://www.google.com/maps/place/" + spl[0] + "," + spl[1] + "/";
	link.target = "_blank";
	link.title = "Open location in Google Maps";

	const icon = document.createElement("img");
	icon.src = browser.runtime.getURL("icons/gmaps.svg");
	icon.style = "width: 6mm";
	link.appendChild(icon);

	return link;
}

function has_link(element) {
	const children = element.parentNode.children;
	for (const child of children) {
		if (child.href == undefined) continue;
		if (child.href.startsWith("https://www.google.com/maps/")) {
			return true;
		}
	}
	return false;
}

function create_links() {
	var links = document.getElementsByTagName("a");
	for (element of links) {
		if (!element.href.startsWith("geo:") || has_link(element)) {
			continue;
		}
		element.parentNode.appendChild(create_link(element));
	}
}

setInterval(create_links, 100);
