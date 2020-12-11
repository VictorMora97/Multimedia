var modoOculto = false;
var myVideoALB = document.getElementById("miVideoALB");

var cuentaReinicios = document.getElementById("cuentaReinicios");
var cuentaPausa = document.getElementById("cuentaPausa");
var estadoModo = document.getElementById("estadoModo");
var fondo = document.getElementById("fondo");
//var estadisticasOcultable = document.getElementById("estadisticasOcultable");
var contR = 1;
var contP = 1;

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

	if (myVideoALB.paused) {
		myVideoALB.play();
	}

}
function pause() {
	if (!myVideoALB.paused) {
		myVideoALB.pause();
		cuentaPausa.innerHTML = contP++;
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
