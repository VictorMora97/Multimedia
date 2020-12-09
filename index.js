var modoOculto = false;
var mapaVisible = true;
var idProvincia = 0;

var myVideoCR = document.getElementById("miVideoCR");
var myVideoALB = document.getElementById("miVideoALB");

var cuentaReinicios = document.getElementById("cuentaReinicios");
var cuentaPausa = document.getElementById("cuentaPausa");
var estadoModo = document.getElementById("estadoModo");
var botones = document.getElementById("botones");
var fondo = document.getElementById("fondo");
var tituloOcultable = document.getElementById("tituloOcultable");
var estadisticasOcultable = document.getElementById("estadisticasOcultable");
var contR = 1;
var contP = 1;
// HACER VIDEO PARA CADA PROVINCIA

var videoCR = videojs('miVideoCR', {
	fluid : true,
	loop : false,
	controls : true,
	controlBar : {
		volumePanel : {
			inline : false
		},
		fullscreenToggle : true,
		playToggle : false,
	}
});
videoCR.removeChild('BigPlayButton');
var videoALB = videojs('miVideoALB', {
	fluid : true,
	loop : false,
	controls : true,
	controlBar : {
		volumePanel : {
			inline : false
		},
		fullscreenToggle : true,
		playToggle : false,
	}
});
videoALB.removeChild('BigPlayButton');

function play() {

	if (idProvincia == 1 && myVideoCR.paused && mapaVisible == true) {
		myVideoCR.play();
	}
	if (idProvincia == 2 && myVideoALB.paused && mapaVisible == true) {
		myVideoALB.play();
	}
}
function pause() {
	if (idProvincia == 1 && !myVideoCR.paused) {
		myVideoCR.pause();
		cuentaPausa.innerHTML = contP++;
	}
	if (idProvincia == 2 && !myVideoALB.paused) {
		myVideoALB.pause();
		cuentaPausa.innerHTML = contP++;
	}
}
function reiniciar() {
	this.tituloPrincipal();

	if (idProvincia == 1) {
		myVideoCR.load();
	}
	if (idProvincia == 2) {
		myVideoALB.load();
	}
	cuentaReinicios.innerHTML = contR++;
	contP = 1;
	cuentaPausa.innerHTML = 0;
	mapaVisible = true;
	if (modoOculto == true) {
		ocultar();
	}
	inicio();
}

function inicio() {
	document.getElementById("conMapa").style.display = 'block';
	document.getElementById("CR").style.display = 'none';
	document.getElementById("ALB").style.display = 'none';
	document.getElementById("TO").style.display = 'none';
	document.getElementById("GDJ").style.display = 'none';
	this.tituloPrincipal();
}

function tituloPrincipal() {
	tituloOcultable.innerHTML = "<u><em>Selecciona una provincia para empezar</em></u>";
}

function cr() {

	document.getElementById("CR").style.display = 'block';
	document.getElementById("conMapa").style.display = 'none';
	tituloOcultable.innerHTML = "<u><em>Ciudad Real</em></u>"
	idProvincia = 1;
}
function alb() {
	document.getElementById("ALB").style.display = 'block';
	document.getElementById("conMapa").style.display = 'none';
	tituloOcultable.innerHTML = "<u><em>Albacete</em></u>"
	idProvincia = 2;
}

function alerta() {
	alert("Elige una provincia de Castilla-La Mancha")
}

function ocultar() {
	if (modoOculto == false) {
		modoOculto = true;
		estadoModo.innerHTML = 'ON';
		estadisticasOcultable.style.display = 'none';
		fondo.style = "background-color : black";
	} else {
		modoOculto = false;
		estadoModo.innerHTML = "OFF";
		estadisticasOcultable.style.display = 'block';
		fondo.style = "background-color : white";
	}
}

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
//"fullscreenToggle"
//]
