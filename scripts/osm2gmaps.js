function create_link(coord_element) {
	const spl = coord_element.href.split("/");
	console.log(spl);

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

var longitude_elements = document.getElementsByClassName('longitude');

for (let element of longitude_elements) {
	const coord_element = element.parentNode;
	coord_element.parentNode.appendChild(create_link(coord_element));
}
