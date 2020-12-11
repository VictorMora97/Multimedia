var modoOculto = false;
var fondo = document.getElementById("fondo");

function ocultar() {
	if (modoOculto == false) {
		modoOculto = true;
		estadoModo.innerHTML = 'ON';
		fondo.style = "background-color : black";

	} else {
		modoOculto = false;
		estadoModo.innerHTML = "OFF";
		fondo.style = "background-color : white";
	}
}
