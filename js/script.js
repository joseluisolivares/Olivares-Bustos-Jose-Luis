$(document).ready(function() {
	$(".html").click(delete_html).mouseover(delete_html);
	$(".css3").click(delete_css3).mouseover(delete_css3);
	$(".Javascript").click(delete_Javascript).mouseover(delete_Javascript);
	$(".Boostrap").click(delete_Boostrap).mouseover(delete_Boostrap);
	$(".Jquery").click(delete_Jquery).mouseover(delete_Jquery);
	$(".PHP").click(delete_PHP).mouseover(delete_PHP);
	$(".Angular").click(delete_Angular).mouseover(delete_Angular);
	$(".Responsive").click(delete_Responsive).mouseover(delete_Responsive);
	$(".guardar_prueba").click(guardar_opinion);
	$(".enviar_form").click(validar_form);
	// $("#nombre").keyup(validar_form);
	// $("#empresa").keyup(validar_form);
    // $("#myModal").modal("show");  
	show();
});


function show(){
	$(".html").delay(1500).fadeIn(1);
	$(".css3").delay(3000).fadeIn(1);
	$(".Javascript").delay(5000).fadeIn(1);
	$(".Boostrap").delay(7000).fadeIn(1);
	$(".Jquery").delay(9000).fadeIn(1);
	$(".PHP").delay(11000).fadeIn(1);
	$(".Angular").delay(13000).fadeIn(1);
	$(".Responsive").delay(15000).fadeIn(1);
}
function delete_html(){
	$(".html").fadeOut(500);
}
function delete_css3(){
	$(".css3").fadeOut(500);
}
function delete_Javascript(){
	$(".Javascript").fadeOut(500);
}
function delete_Boostrap(){
	$(".Boostrap").fadeOut(500);
}
function delete_Jquery(){
	$(".Jquery").fadeOut(500);
}
function delete_PHP(){
	$(".PHP").fadeOut(500);
}
function delete_Angular(){
	$(".Angular").fadeOut(500);
}
function delete_Responsive(){
	$(".Responsive").fadeOut(500);
}

function guardar_opinion(){
	var posit2 = $(".posit2").val();
	if (posit2 != "") {
		$(".posit2").prop('disabled', true);
	}
	
	
}
function validar_form(){
	var nombre = $("#nombre").val();
	var empresa = $("#empresa").val();
	var email = $(".email").val();

	if (nombre=="") {
		$("#nombre").css("background-color","red");
	}else{
		$("#nombre").css("background-color","darkblue");

	}
	if (empresa=="") {
		$("#empresa").css("background-color","red");
	}else{
		$("#empresa").css("background-color","darkblue");

	}
	if (email=="") {
		$(".email").css("background-color","red");
	}else{
		$(".email").css("background-color","darkblue");

	}


}
