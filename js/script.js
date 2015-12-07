// $("#range").mousemove( function(e){
// 	$("#valBox").html($(this).val());
// });

// $("#range").change( function(e){
// 	$("#valBox").html($(this).val());
// });


var canvasMask = new Dragdealer('canvas-mask', {
  x: 0,
  // Start in the bottom-left corner
  y: 0,
  vertical: true,
  speed: 0.2,
  loose: true
  //requestAnimationFrame: true
});

// Bind event on the wrapper element to prevent it when a drag has been made
// between mousedown and mouseup (by stopping propagation from handle)
$('#canvas-mask').on('click', '.menu a', function(e) {
	e.preventDefault();
	var anchor = $(e.currentTarget);
	canvasMask.setValue(anchor.data('x'), anchor.data('y'));
});



var x, y;
var posx, posy;

function getPos(e){
	var doc = document.documentElement;

	x=e.clientX;
	y=e.clientY + (window.pageYOffset || doc.scrollTop);
	var cursor="Your Mouse Position Is : " + x + " and " + y ;
	document.getElementById("div_posicao").innerHTML=cursor
}

function stopTracking(){
	document.getElementById("div_posicao").innerHTML="";
}

function registra( obj ){
	posx = x;
	posy = y;

	var add_nome = document.getElementById("add_nome");
	var div_adicionar = document.getElementById("div_adicionar");
	div_adicionar.style.top = posy.toString() + "px";
	div_adicionar.style.left = posx.toString() + "px";
	div_adicionar.style.display = "";
	add_nome.value = "";
	add_nome.focus();
  // alert( div_adicionar.style.marginTop ); 
}

function adicionar_registro( obj ){

	var div_adicionar = document.getElementById("div_adicionar");
	div_adicionar.style.display = "none";

	var div = document.createElement("div");
	div.style.top = posy.toString() + "px";
	div.style.left = posx.toString() + "px";
	div.style.position = "absolute";
	div.style.width = "24px";
	div.style.height = "24px";
	var add_nome = document.getElementById("add_nome");

	div.innerHTML = "<img src='images/bus.png' title='"+add_nome.value+"'>";
	div.style.display = "";
   //alert( div.innerHTML );
   document.body.appendChild(  div );
 }

 function bt_esconder(obj ){
 	var div_adicionar = document.getElementById("div_adicionar");
 	div_adicionar.style.display = "none";

 }
