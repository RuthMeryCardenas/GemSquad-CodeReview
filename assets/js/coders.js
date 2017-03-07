var array = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];


function coders(e){
	var coder = document.getElementById('coder');
	
	var text = '';
	var respuesta = '<div class="div-coder">' +
					'<br>Nombre: ' + e.nombre +
					'<br><br>Apellido: ' + e.apellido +
					'<br><br>Promoción: ' + e.promocion +
					'<br><br>Estado: ' + e.estado + '<br></div>';

		text += respuesta;
		document.write(text);
}

array.forEach(coders);