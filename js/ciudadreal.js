var modoOculto = false;
var myVideoCR = document.getElementById("miVideoCR");

var penalizacion = document.getElementById("penalizacion");
var cuentaReinicios = document.getElementById("cuentaReinicios");
var cuentaPausa = document.getElementById("cuentaPausa");
var pausasPuntos = document.getElementById("pausas");
var estadoModo = document.getElementById("estadoModo");
var fondo = document.getElementById("fondo");
var tiempo = document.getElementById("tiempo");
var tiempoPrueba = document.getElementById("tiempoPrueba");
// var nota = document.getElementById("nota");
// var julioCesar = document.getElementById("julioCesar");

// var aprobacion = 1;
var contR = 1;
var contP = 1;
var contAciertos = 0;
var contFallos = 0;
var empezado = false;
var acabado = false;
var ms = -15;
var faseVideo = 0;
var nota = 0;
var penalizando = false;

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

function comprobacionPlay() {
	if (empezado == false && !myVideoCR.paused) {
		empezado = true;
		// segundos = segundos - 1;
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
	if (acabado == true) {
		reset();
	}
}

function pause() {
	if (!myVideoCR.paused) {
		myVideoCR.pause();
		cuentaPausa.innerHTML = contP++;
		pausasPuntos.innerHTML = cuentaPausa.innerHTML;
	}
}

function atras() {
	window.location.href = "index.html";
}

function reset() {
	location.reload();
	empezado = false;
	acabado = false;
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

setInterval(cronometro, 1000);
function cronometro() {
	if (empezado == true) {
		ms = ms + 1;
		tiempoPrueba.innerHTML = ms.toFixed(0);
	}
}

setInterval(calculoNota, 100);
function calculoNota() {
	document.getElementById("nota").innerHTML = nota.toFixed(2);
}

setInterval(penalizacionTiempo, 500);
function penalizacionTiempo() {
	if ((ms - videoCR.currentTime() > "0") && empezado == true) {
		nota = nota - 0.02;
		tiempoPrueba.style = "color: red";
		if (nota < 5) {
			document.getElementById("julioCesar").src = "img/mal.png";
		} else {
			document.getElementById("julioCesar").src = "img/bien.png";
		}
	} else if (nota >= 5) {
		document.getElementById("julioCesar").src = "img/bien.png";
	}
}

setInterval(paradasModal1, 10);
function paradasModal1() {
	tiempo.innerHTML = videoCR.currentTime();
	if (videoCR.currentTime() > '15' && faseVideo == 0) {
		$('#myModal1').modal({
			backdrop : 'static',
			keyboard : false
		});
		faseVideo = 1;
		myVideoCR.pause();
	}
}

setInterval(paradasModal2, 10);
function paradasModal2() {
	if (videoCR.currentTime() > '27' && faseVideo == 1) {
		$('#myModal2').modal({
			backdrop : 'static',
			keyboard : false
		});
		faseVideo = 2;
		myVideoCR.pause();
	}
}

setInterval(paradasModal3, 10);
function paradasModal3() {
	if (videoCR.currentTime() > '42' && faseVideo == 2) {
		$('#myModal3').modal({
			backdrop : 'static',
			keyboard : false
		});
		faseVideo = 3;
		myVideoCR.pause();
	}
}

setInterval(paradasModal4, 10);
function paradasModal4() {
	if (videoCR.currentTime() > '53' && faseVideo == 3) {
		$('#myModal4').modal({
			backdrop : 'static',
			keyboard : false
		});
		faseVideo = 4;
		myVideoCR.pause();
	}
}

setInterval(paradasModal5, 10);
function paradasModal5() {
	if (videoCR.currentTime() > '65' && faseVideo == 4) {
		$('#myModal5').modal({
			backdrop : 'static',
			keyboard : false
		});
		faseVideo = 5;
		myVideoCR.pause();
	}
}

setInterval(paradasModal6, 10);
function paradasModal6() {
	if (videoCR.currentTime() > '77' && faseVideo == 5) {
		$('#myModal6').modal({
			backdrop : 'static',
			keyboard : false
		});
		faseVideo = 6;
		myVideoCR.pause();
	}
}

// Notas --> Pregunta 1 y 6 (2ptos). Preguntas 2,3,4 y 5 (1.5ptos)
// Penalizacion fallos --> -1pto siempre
// Penalizacion el tiempo cuando alcanza el currentTime del video
// Dedo abajo y rojo si nota es <5 y el tiempo ya esta penalizando

// -----MODAL1----------------------------------------------------------------

function enviar1() {
	var respuesta1 = document.getElementById("respuesta1").value;

	if (respuesta1.toUpperCase() == "ALARCOS"
			|| respuesta1.toUpperCase() == "ERMITA DE ALARCOS"
			|| respuesta1.toUpperCase().replaceAll(' ', '') == "NUESTRASEÑORADEALARCOS"
			|| respuesta1.toUpperCase().replaceAll(' ', '') == "ERMITANUESTRASEÑORADEALARCOS"
			|| respuesta1.toUpperCase().replaceAll(' ', '') == "ERMITADENUESTRASEÑORADEALARCOS"
			|| respuesta1.toUpperCase().replaceAll(' ', '') == "ERMITAALARCOS") {

		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("respuesta1").value = "";
		myVideoCR.play();
		nota = nota + 2;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("respuesta1").value = "";
		myVideoCR.play();
		nota = nota - 0.5;
	}
}

function repetir1() {
	videoCR.currentTime(0);
	myVideoCR.play();
	faseVideo = faseVideo - 1;
}
// ------MODAL2---------------------------------------------------------------

function enviar2() {
	var respuestaC = document.getElementById("correcta").checked;
	if (respuestaC == true) {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("correcta").checked = false;
		myVideoCR.play();
		nota = nota + 1.5;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("1inc1").checked = false;
		document.getElementById("1inc2").checked = false;
		myVideoCR.play();
		nota = nota - 0.7;
	}
}

function repetir2() {
	videoCR.currentTime(15);
	myVideoCR.play();
	faseVideo = faseVideo - 1;
}

// ------MODAL3---------------------------------------------------------------

function enviar3() {
	var respuestaC1 = document.getElementById("correcta1").checked;
	if (respuestaC1 == true) {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("correcta1").checked = false;
		myVideoCR.play();
		nota = nota + 1.5;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("2inc1").checked = false;
		document.getElementById("2inc2").checked = false;
		myVideoCR.play();
		nota = nota - 0.7;
	}
}

function repetir3() {
	videoCR.currentTime(27);
	myVideoCR.play();
	faseVideo = faseVideo - 1;
}

// ------MODAL4---------------------------------------------------------------

function enviar4() {
	var respuestaC2 = document.getElementById("correcta2").checked;
	if (respuestaC2 == true) {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("correcta2").checked = false;
		myVideoCR.play();
		nota = nota + 1.5;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("3inc1").checked = false;
		document.getElementById("3inc2").checked = false;
		myVideoCR.play();
		nota = nota - 0.7;
	}
}

function repetir4() {
	videoCR.currentTime(42);
	myVideoCR.play();
	faseVideo = faseVideo - 1;
}

// ------MODAL5---------------------------------------------------------------

function enviar5() {
	var respuestaC3 = document.getElementById("correcta3").checked;
	if (respuestaC3 == true) {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("correcta3").checked = false;
		myVideoCR.play();
		nota = nota + 1.5;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("4inc1").checked = false;
		document.getElementById("4inc2").checked = false;
		myVideoCR.play();
		nota = nota - 0.7;
	}
}

function repetir5() {
	videoCR.currentTime(53);
	myVideoCR.play();
	faseVideo = faseVideo - 1;
}

// -----MODAL6----------------------------------------------------------------

function enviar6() {
	var respuesta2 = document.getElementById("respuesta2").value;
	if (respuesta2.toUpperCase() == "GASSET"
			|| respuesta2.toUpperCase().replaceAll(' ', '') == "PARQUEDEGASSET"
			|| respuesta2.toUpperCase().replaceAll(' ', '') == "DEGASSET") {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("respuesta2").value = "";
		myVideoCR.play();
		nota = nota + 2;
		empezado = false;
		acabado = true;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("respuesta2").value = "";
		myVideoCR.play();
		nota = nota - 0.5;
		empezado = false;
		acabado = true;
	}
}

function repetir6() {
	videoCR.currentTime(65);
	myVideoCR.play();
	faseVideo = faseVideo - 1;
}

// $(window).on('load', function() {
// $('#myModal').modal('show');
// });
