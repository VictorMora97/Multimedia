var modoOculto = false;

var mapaVisible = true;

var myVideo = document.getElementById("miVideo");
var cuentaReinicios = document.getElementById("cuentaReinicios");
var cuentaPausa = document.getElementById("cuentaPausa");
var estadoModo = document.getElementById("estadoModo");
var botones = document.getElementById("botones");
var fondo = document.getElementById("fondo");
var tituloOcultable = document.getElementById("tituloOcultable");
var estadisticasOcultable = document.getElementById("estadisticasOcultable");
var contR = 1;
var contP = 1;

var video = videojs('miVideo', {

	fluid : true,
	loop : false,
	controls : true,
	controlBar : {
		volumePanel : {
			inline : false
		},
		fullscreenToggle : true,
		playToggle : false,
		remainingTimeDisplay : true,
		durationDisplay : true

	}
});
video.removeChild('BigPlayButton');

video.on('click', function(evt) {
	if (evt.target.tagName === 'VIDEO') {
		console.log('video was clicked');
	}
});

// var button = player.addChild('button');
// console.log(button.el());

// controlBar: {
// children: [
// "playToggle",
// "volumeMenuButton",
// "durationDisplay",
// "timeDivider",
// "currentTimeDisplay",
// "progressControl",
// "remainingTimeDisplay",
// "fullscreenToggle"
// ]

function play() {
	if (myVideo.paused)
		myVideo.play();
}
function pause() {
	if (!myVideo.paused) {
		myVideo.pause();
		cuentaPausa.innerHTML = contP++;
	}
}
function reiniciar() {
	myVideo.load();
	cuentaReinicios.innerHTML = contR++;
	contP = 1;
	cuentaPausa.innerHTML = 0;
	mapaVisible = true;
	mapa();

}
function makeBig() {
	myVideo.width = myVideo.width + 40;
}

function makeSmall() {
	myVideo.width = myVideo.width - 40;
}

function makeNormal() {
	myVideo.width = 900;
}

function acelerar() {
	myVideo.playbackRate = 5.0;
}
function frenar() {
	myVideo.playbackRate = 1.0;
}

function mapa() {
	if (mapaVisible == true) {
		document.getElementById("sinMapa").style.display = 'none';
		document.getElementById("conMapa").style.display = 'block';
		mapaVisible = false;
	} else {
		document.getElementById("sinMapa").style.display = 'block';
		document.getElementById("conMapa").style.display = 'none';
		mapaVisible = true;

	}
}

function ocultar() {
	if (modoOculto == false) {
		modoOculto = true;
		estadoModo.innerHTML = 'ON';
		estadisticasOcultable.style.display = 'none';
		// tituloOcultable.style.display = 'none';
		// myVideo.style = "margin-top: 3em";
		fondo.style = "background-color : black";
		// botones.style = "margin-top: 3em";
	} else {
		modoOculto = false;
		estadoModo.innerHTML = "OFF";
		estadisticasOcultable.style.display = 'block';
		// tituloOcultable.style.display = 'block';
		// myVideo.width = 900;
		// myVideo.style = "margin-down: -3em";
		fondo.style = "background-color : white";
		// botones.style = "margin-down: -3em";

	}
}
