function create_link(coord_element) {
	const spl = coord_element.href.split("/");

	const link = document.createElement("a");
	link.href = "https://www.google.com/maps/place/" + spl[4] + "," + spl[5] + "/";
	link.target = "_blank";
	link.title = "Open location in Google Maps";

	const icon = document.createElement("img");
	icon.src = browser.runtime.getURL("icons/gmaps.svg");
	icon.style = "width: 8mm";
	link.appendChild(icon);

	return link;
}

function has_link(element) {
	const children = element.parentNode.parentNode.children;
	for (let child of children) {
		if (child.href === undefined) continue;
		if (child.href.startsWith("https://www.google.com/maps")) {
			return true;
		}
	}
	return false;
}

function create_links() {
	var longitude_elements = document.getElementsByClassName('longitude');

	for (let element of longitude_elements) {
		if (has_link(element)) {
			continue;
		}
		const coord_element = element.parentNode;
		coord_element.parentNode.appendChild(create_link(coord_element));
	}
}

setInterval(create_links, 100);
