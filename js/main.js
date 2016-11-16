/*
#name
#lastname
#input-email
#input-password
#input-social
#bEnviar
*/
//crear los idvs para poner los mensajes


/*var cajaTexto =  document.createElement("div");
var contenedor = document.createElement("p");
var textMsj = document.createTextNode("este mensaje no puede quedar vacio")

cajaTexto.appendChild(contenedor);
contenedor.appendChild(textMsj);*/ //quise crear los div desde DOM & FAILED


$(document).ready(function validateForm (){
var exprEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
//este es el msj que deberia aparecer al lado del input
var mensaje = document.getElementById("mensaje").innerHTML = "este cuadro no puede quedar vacio";
var mensaje1 = document.getElementById("mensaje1").innerHTML = "este cuadro no puede quedar vacio";
var mensaje2 = document.getElementById("mensaje2").innerHTML = "este cuadro no puede quedar vacio";
var mensaje3 = document.getElementById("mensaje3").innerHTML = "este cuadro no puede quedar vacio";

	$("#bEnviar").click(function(){
		var nombre = $("#name").val();
		var apellido = $("#lastname").val();
		var correo = $("#input-email").val();
		var pwd = $("#input-password").val();

			if(nombre == ""){
				function mostrar(){
					document.getElementById("mensaje").style.display = 'block';
				}
				$("mensaje").fadeIn();
				return false;
			}else{
				$("mensaje").fadeOut();
				if(correo == "" || !exprEmail.test(correo)){
					$("mensaje1").fadeIn();
					return false;
				}else{
					$("mensaje1").fadeOut();
					if(apellido == ""){
						$("mensaje2").fadeIn();
						return false;
					}else{
						$("mensaje2").fadeout();
						if(pwd == ""){
							$("mensaje3").fadeIn();
							return false;
						}
					}
				}
			}
	});

});
