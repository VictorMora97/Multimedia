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
	
	if (myVideo.paused && mapaVisible == true){
		myVideo.play();
	}
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
	if(modoOculto==true){
		ocultar();
	}
	inicio();
}

function acelerar() {
	myVideo.playbackRate = 5.0;
}
function frenar() {
	myVideo.playbackRate = 1.0;
}

function inicio(){
	document.getElementById("conMapa").style.display = 'block';
	document.getElementById("CR").style.display = 'none';
	document.getElementById("ALB").style.display = 'none';
	document.getElementById("TO").style.display = 'none';
	document.getElementById("GDJ").style.display = 'none';
	this.tituloPrincipal();
}


function tituloPrincipal(){
	tituloOcultable.innerHTML = "<u><em>Selecciona una provincia para empezar</em></u>";
}

function cr() {

	document.getElementById("CR").style.display = 'block';
	document.getElementById("conMapa").style.display = 'none';
	tituloOcultable.innerHTML = "<u><em>Ciudad Real</em></u>"
}
function alb() {
	document.getElementById("ALB").style.display = 'block';
	document.getElementById("conMapa").style.display = 'none';
	tituloOcultable.innerHTML = "<u><em>Albacete</em></u>"
}

function alerta(){
alert("Elige una provincia de Castilla-La Mancha")
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
