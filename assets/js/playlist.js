const epsList = document.getElementById('epsList');
const videoTitle = document.getElementById('title');

var title = getUrlVars()["t"];
var episode = getUrlVars()["ep"];

videoTitle.innerHTML = `${title} - ${episode}`;

for (var i = 0; i < episode; i++) {
	var eps = pad(i + 1, 2);
	epsList.innerHTML += `
		<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
		<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
			<a href="player.html?t=${title}&ep=${episode}&idx=${i}">${titleCase(title)} - Chapter ${eps}</a>
		</th>
		</tr>
	`;
}

function getUrlVars() {
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}

function pad(str, max) {
	str = str.toString();
	return str.length < max ? pad("0" + str, max) : str;
}

function titleCase(str) {
	var splitStr = str.toLowerCase().split(' ');
	for (var i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(' ');
}