/*
#name
#lastname
#input-email
#input-password
#input-social
#bEnviar
*/


$(document).ready(function validateForm(){
var exprEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

	$("#bEnviar").click(function(){
		var nombre = $("#name").val();
		var apellido = $("#lastname").val();
		var correo = $("#input-email").val();
		var pwd = $("#input-password").val();

			if(nombre == ""){
				$("#mensaje1").fadeIn();
				return false;
			}else{
				$("#mensaje1").fadeOut();
				if(correo == "" || !exprEmail.test(correo)){
					$("#mensaje2").fadeIn();
					return false;
				}else{
					$("#mensaje2").fadeOut();
					if(apellido == ""){
						$("#mensaje3").fadeIn();
						return false;
					}else{
						$("#mensaje3").fadeout();
						if(pwd == ""){
							$("#mensaje4").fadeIn();
							return false;
						}
					}
				}
			}
	});

});
