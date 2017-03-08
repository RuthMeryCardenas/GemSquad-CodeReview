var parametro = location.search.split('nombre=')[1];
var nombre = document.getElementById('name');
if (parametro == undefined ) {
	nombre.innerHTML = prompt("BIENVENIDA\n Indicanos tu nombre para personalizar el capitan: ");
} else {
	nombre.innerHTML = parametro;
}
document.getElementById("coder").addEventListener('click',function() {
	this.href += "?nombre="+nombre.innerHTML;
});

