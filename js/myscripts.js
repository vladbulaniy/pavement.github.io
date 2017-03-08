window.onload = function(){
    var contextTreug = new Array(6);
	var trugCanvas = new Array(6);
	var contextTreug2 = new Array(6);
	var trugCanvas2 = new Array(6);
	for (var i=0; i<contextTreug.length; i++){
	trugCanvas[i] = document.getElementsByClassName('treug1')[i];
	contextTreug[i] = trugCanvas[i].getContext("2d");
    contextTreug[i].fillStyle = "#CACACA";
    contextTreug[i].strokeStyle = '#CACACA';
    contextTreug[i].beginPath();
    contextTreug[i].moveTo(10,10);
    contextTreug[i].lineTo(22,10);
    contextTreug[i].lineTo(10,22);
    contextTreug[i].fill();
    contextTreug[i].stroke();

	trugCanvas2[i] = document.getElementsByClassName('treug2')[i];
    contextTreug2[i] = trugCanvas2[i].getContext("2d");
	contextTreug2[i].fillStyle = "#CACACA";
	contextTreug2[i].strokeStyle = '#CACACA';
    contextTreug2[i].beginPath();
    contextTreug2[i].moveTo(20,22);
    contextTreug2[i].lineTo(8,10);
    contextTreug2[i].lineTo(20,10);
    contextTreug2[i].fill();
    contextTreug2[i].stroke();
	};

var myCanvas = new Array(4);
	var context = new Array(4);
    myCanvas[0] = document.getElementsByClassName('miniCircle')[0];
        context[0] = myCanvas[0].getContext("2d");
        context[0].fillStyle = "white";
        context[0].beginPath();
        context[0].arc(7, 7,  7, 20, 2*Math.PI, true);
        context[0].fill();
    for (var i=1; i<myCanvas.length; i++){
        myCanvas[i] = document.getElementsByClassName('miniCircle')[i];
        context[i] = myCanvas[i].getContext("2d");
        context[i].fillStyle = "white";
        context[i].beginPath();
        context[i].arc(5, 7,  5, 20, 2*Math.PI, true);
        context[i].fill();
    }

};/*------------------------------*/

function floatMiniMenu (colorCircle){

if (colorCircle==1){
var myCanvas = new Array(4);
	var context = new Array(4);
    for (var i=0; i<myCanvas.length; i++){
        myCanvas[i] = document.getElementsByClassName('miniCircle')[i];
        context[i] = myCanvas[i].getContext("2d")
        context[i].clearRect(0, 0, 18, 18);
    }

context[0].fillStyle = "white";
context[0].beginPath();
context[0].arc(7, 7,  7, 20, 2*Math.PI, true);
context[0].fill();

for (var i=0; i<4; i++){
    if (i!=0){
context[i].fillStyle = "white";
context[i].lineWidth = 20;
context[i].beginPath();
context[i].arc(5, 7,  5, 20, 2*Math.PI, true);
context[i].fill();
}
}
}

else if(colorCircle==2){
var myCanvas = new Array(4);
	var context = new Array(4);
    for (var i=0; i<myCanvas.length; i++){
        myCanvas[i] = document.getElementsByClassName('miniCircle')[i];
        context[i] = myCanvas[i].getContext("2d")
        context[i].clearRect(0, 0, 18, 18);
    }

context[1].fillStyle = "white";
context[1].beginPath();
context[1].arc(7, 7,  7, 20, 2*Math.PI, true);
context[1].fill();

for (var i=0; i<4; i++){
    if (i!=1){
context[i].fillStyle = "white";
context[i].lineWidth = 20;
context[i].beginPath();
context[i].arc(5, 7,  5, 20, 2*Math.PI, true);
context[i].fill();
}
}
}
else if(colorCircle==3){
var myCanvas = new Array(4);
	var context = new Array(4);
    for (var i=0; i<myCanvas.length; i++){
        myCanvas[i] = document.getElementsByClassName('miniCircle')[i];
        context[i] = myCanvas[i].getContext("2d")
       context[i].clearRect(0, 0, 18, 18);
    }

context[2].fillStyle = "white";
context[2].beginPath();
context[2].arc(7, 7,  7, 20, 2*Math.PI, true);
context[2].fill();

for (var i=0; i<4; i++){
    if (i!=2){
context[i].fillStyle = "white";
context[i].lineWidth = 20;
context[i].beginPath();
context[i].arc(5, 7,  5, 20, 2*Math.PI, true);
context[i].fill();
}
}
}
else {
var myCanvas = new Array(4);
	var context = new Array(4);
    for (var i=0; i<myCanvas.length; i++){
        myCanvas[i] = document.getElementsByClassName('miniCircle')[i];
        context[i] = myCanvas[i].getContext("2d")
        context[i].clearRect(0, 0, 18, 18);
    }

context[3].fillStyle = "white";
context[3].beginPath();
context[3].arc(7, 7,  7, 20, 2*Math.PI, true);
context[3].fill();

for (var i=0; i<4; i++){
    if (i!=3){
context[i].fillStyle = "white";
context[i].lineWidth = 20;
context[i].beginPath();
context[i].arc(5, 7,  5, 20, 2*Math.PI, true);
context[i].fill();
}
}
}
};


function show_block() {
    var tempWidth = $(window).width();
var otstup = (tempWidth-400)/2;
$('#forma_block').css('left',otstup);
$('#shadow_block').removeClass('shadow');
$('#forma_block').removeClass('shadow');
};


function noshow_block() {
$('#shadow_block').addClass('shadow');
$('#forma_block').addClass('shadow');
};

var page=1;

function next(){
if (page<=3){
document.getElementById('main_screen').src='img/'+(page+1)+'.jpg';
page+=1;
floatMiniMenu (page);
}
else {
document.getElementById('main_screen').src='img/'+('1.jpg');
page=1;
floatMiniMenu (page);
}

};

function prev(){
if ((page<=4) && (page>=1)){
if (page!=1){
document.getElementById('main_screen').src='img/'+(page-1)+'.jpg';
page-=1;
floatMiniMenu (page);
}
else {
document.getElementById('main_screen').src='img/'+('4.jpg');
page=4;
floatMiniMenu (page);
}
}
};

function Playing(){
  play = setInterval('next()', 4000);
};

Playing();
/*Подчёркивание активного пункта меню*/
function Videlenie(el){
     $("#mainMenu li a span").css("border-color", "#29b29a");
     $(el).css("border-color", "white");
}
/*конец подчёркивание активного пункта меню*/

/*----------------------отправка формы на почту через Ajax1-------------------*/
 function AjaxFormRequest1(result_id,form_id) {
                $.ajax({
                    url:     "send1.php", //Адрес подгружаемой страницы
                    type:     "POST", //Тип запроса
                    //dataType: "html", //Тип данных
                    data: jQuery("#"+form_id).serialize(),
                    success: function(response) { //Если все нормально
                   // alert(response);
                    document.getElementById(result_id).innerHTML = response;
                },
                error: function(response) { //Если ошибка
               // alert("Oshibka");
                document.getElementById(result_id).innerHTML = "Ошибка при отправке формы";
                }

             });
        }
/*---------------------- Конец отправки формы на почту через Ajax1-------------------*/

/*----------------------отправка формы на почту через Ajax-------------------*/
 function AjaxFormRequest(result_id,form_id) {
                $.ajax({
                    url:     "send.php", //Адрес подгружаемой страницы
                    type:     "POST", //Тип запроса
                    //dataType: "html", //Тип данных
                    data: jQuery("#"+form_id).serialize(),
                    success: function(response) { //Если все нормально
                   // alert(response);
                    document.getElementById(result_id).innerHTML = response;
                },
                error: function(response) { //Если ошибка
               // alert("Oshibka");
                document.getElementById(result_id).innerHTML = "Ошибка при отправке формы";
                }

             });
        }
/*---------------------- Конец отправки формы на почту через Ajax-------------------*/







$(function(){
/*тряска телефона*/
$(".Knopka2").hover(function() {
$("#Phone").effect('shake',{times: 20, distance: 3 },2000);
}, function(){});
/*конец тряски телефона*/

$("#BlockGallery").hover(function() {
    clearInterval(play); //прекратить смену слайдов
}, function() {
    Playing(); //продолжить
});

$('textarea').focus( function (){
 $(this).text("");
}).blur( function (){
 $(this).text("Сообщение");
});

$('#CallBlock').animate({top:'20px'},500);
$('#CallBlock').animate({top:'-10px'},300);
$('#CallBlock').animate({top:'5px'},150);
$('#CallBlock').animate({top:'0px'},100);

$('.Knopka2').hover(function(){
   $('#Phone').effect(shake,3000);
});

/*
$('#KnopkaInShadowBlock').click(function(){
    $('#textShadowinForm').removeClass('shadow2');
});

$('#KnopkaInMainForm').click(function(){
    $('#textShadowinForm1').removeClass('shadow2');
});*/

/*появление значка "наверх" после опускания на 110пикселей*/
$(window).scroll(function() {
if($(this).scrollTop() > 110) {
$('#toTop').fadeIn();
} else {
$('#toTop').fadeOut();
}
});

$('#toTop').click(function() {
$('body,html').animate({scrollTop:0},800);
});

var tempWidth = $(window).width();
	if (tempWidth<1200){
		var otstupX = tempWidth-300-10;
		$('#CallBlock').css('margin-left', otstupX);
		} else {$('#CallBlock').css('margin-left', 1200-300-10);}

$(window).resize(function () {
	var tempWidth = $(window).width();
	if (tempWidth<1200){
		var otstupX = tempWidth-300-10;
		$('#CallBlock').css('margin-left', otstupX);
		} else {$('#CallBlock').css('margin-left', 1200-300-10);}
    });



}); //конец JQuery кода



