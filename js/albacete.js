var modoOculto = false;
var myVideoALB = document.getElementById("miVideoALB");

var cuentaReinicios = document.getElementById("cuentaReinicios");
var cuentaPausa = document.getElementById("cuentaPausa");
var pausasPuntos = document.getElementById("pausas");
var estadoModo = document.getElementById("estadoModo");
var fondo = document.getElementById("fondo");
var tiempo = document.getElementById("tiempo");
// var estadisticasOcultable = document.getElementById("estadisticasOcultable");
var contR = 1;
var contP = 1;
var empezado = false;
var segundos = 0;

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

setInterval(cronometro, 1000);
function cronometro() {
	comprobacionPlay();
	if (empezado == true) {
		segundos += 1;
		tiempo.innerText = segundos + " segundos";
	}
}

function comprobacionPlay() {
	if (empezado == false && !myVideoALB.paused) {
		empezado = true;
		segundos = segundos - 1;
		cronometro();
	}
}

function play() {
	if (empezado == false) {
		empezado = true;
		cronometro();
	}
	if (myVideoALB.paused) {
		myVideoALB.play();
	}

}
function pause() {
	if (!myVideoALB.paused) {
		myVideoALB.pause();
		cuentaPausa.innerHTML = contP++;
		pausasPuntos.innerHTML = cuentaPausa.innerHTML;
	}
}

function reiniciar() {

	window.location.href = "index.html";
	cuentaReinicios.innerHTML = contR++;
	contP = 1;
	cuentaPausa.innerHTML = 0;
	if (modoOculto == true) {
		ocultar();
	}
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