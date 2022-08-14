const player = videojs('video', {
	fill: true,
	aspectRatio: '16:9',
	fullscreen: {
		enterOnRotate: true,
		exitOnRotate: true,
		alwaysInLandscapeMode: true,
		iOS: true
	}
});
const homeBtnEl = document.createElement('button');
const nextBtnEl = document.createElement('button');
const prevBtnEl = document.createElement('button');

let videos = [];

var url = window.location.href;
var title = getUrlVars()["t"];

homeBtnEl.classList.add("vjs-button");
nextBtnEl.classList.add("vjs-button");
prevBtnEl.classList.add("vjs-button");

homeBtnEl.innerHTML = "Home";
nextBtnEl.innerHTML = "Next";
prevBtnEl.innerHTML = "Prev";

homeBtnEl.setAttribute("onclick", "homeBtn()");
nextBtnEl.setAttribute("onclick", "nextBtn()");
prevBtnEl.setAttribute("onclick", "prevBtn()");

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

if (title) {
	for (var i = 0; i < 25; i++) {
		episode = pad(i + 1, 2);
		videos[i] = {
			sources: [
				{
					src: `server/videos/${title}/${title}-${episode}.mp4`,
					type: 'video/mp4'
				}
			],
			poster: '/aniplayer/assets/images/01-amelia-poster.jpeg'
		};
	}
	player.addClass('vjs-tailwind');
	player.landscapeFullscreen();
	player.playlist(videos);
	player.playlist.autoadvance(0);
	player.controlBar.el().insertBefore(homeBtnEl, player.controlBar.el().firstChild.nextSibling)
	player.controlBar.el().insertBefore(nextBtnEl, player.controlBar.el().firstChild.nextSibling)
	player.controlBar.el().insertBefore(prevBtnEl, player.controlBar.el().firstChild)

	document.onkeydown = (e) => {
		e = e || window.event;
		if (e.keyCode === 37) {
			player.playlist.previous();
		} else if (e.keyCode === 39) {
			player.playlist.next();
		}
	}

	function homeBtn() {
		window.location.href = "index.html";
	}

	function nextBtn() {
		player.playlist.next();
	}

	function prevBtn() {
		player.playlist.previous();
	}
}