const player = videojs('video');
let videos = [];
var url = window.location.href;
var title = getUrlVars()["t"];

for (var i = 0; i < 25; i++) {
	episode = pad(i + 1, 2);
	videos[i] = {
		sources: [
			{
				src: `server/videos/${title}-${episode}.mp4`,
				type: 'video/mp4'
			}
		],
		poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	};
}

player.playlist(videos);
player.playlist.autoadvance(0);

function pad(str, max) {
	str = str.toString();
	return str.length < max ? pad("0" + str, max) : str;
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