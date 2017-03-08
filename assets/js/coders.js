var array = [ { nombre : "Meche", apellido : "Zubieta",  grado : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", grado : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  grado : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  grado : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  grado : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  grado : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  grado : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  grado : "5ta. promoción", estado : "Trabajando" } ];


function coders(e){
	var coder = document.getElementById('coder');
	
	var texto = '';
	var respuesta = '<div class="div-coder">' +
					'<br>Nombre: ' + e.nombre +
					'<br><br>Apellido: ' + e.apellido +
					'<br><br>Promoción: ' + e.grado +
					'<br><br>Estado: ' + e.estado + '<br></div>';

		texto += respuesta;
		document.write(texto);
}

array.forEach(coders);