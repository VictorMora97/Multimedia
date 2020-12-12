var modoOculto = false;
var myVideoCR = document.getElementById("miVideoCR");

var cuentaReinicios = document.getElementById("cuentaReinicios");
var cuentaPausa = document.getElementById("cuentaPausa");
var pausasPuntos = document.getElementById("pausas");
var estadoModo = document.getElementById("estadoModo");
var fondo = document.getElementById("fondo");
var tiempo = document.getElementById("tiempo");

//var form = document.getElementById("form");
//var areaForm = document.getElementById("area");
//var areaVideo = document.getElementById("mi");

// var estadisticasOcultable = document.getElementById("estadisticasOcultable");
var contR = 1;
var contP = 1;
var contAciertos = 0;
var contFallos = 0;
var empezado = false;
var segundos = -3;

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

setInterval(cronometro, 1000);
function cronometro() {
	comprobacionPlay();
	if (empezado == true) {
		segundos += 1;
		tiempo.innerText = segundos + " segundos";
	}
}

function comprobacionPlay() {
	if (empezado == false && !myVideoCR.paused) {
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
	if (myVideoCR.paused) {
		myVideoCR.play();
	}

}
function pause() {
	if (!myVideoCR.paused) {
		myVideoCR.pause();
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

//-----MODAL1----------------------------------------------------------------

function enviar1() {
	var respuesta1 = document.getElementById("respuesta1").value;
	if (respuesta == "hola" || respuesta == "Hola" || respuesta == "HOLA") {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("respuesta").value = "";
		myVideoCR.play();
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("respuesta").value = "";
		myVideoCR.play();
	}
}

function repetir1() {
	videoCR.currentTime(5);
	myVideoCR.play();
}
//------MODAL2---------------------------------------------------------------

function enviar2() {
	var respuestaC = document.getElementById("correcta").checked;
	if (respuestaC == true) {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("correcta").checked = false;
		myVideoCR.play();
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("inc1").checked = false;
		document.getElementById("inc2").checked = false;
		myVideoCR.play();
	}
}

function repetir2() {
	videoCR.currentTime(15);
	myVideoCR.play();
}

//$(window).on('load', function() {
//	$('#myModal').modal('show');
//});
