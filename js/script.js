// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice="";
var computerChoice="";
var winner="";  
var randomNumber= 0;




// DOCUMENT READY FUNCTION BELOW
 
$("#shoot").click(function(){
    var userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    });
    randomNumber=Math.random();
    if(randomNumber<.3333){
    $("#computerChoice").text("Rock");
     computerChoice="Paper"
     $("#computerChoice").text("Paper");
     computerChoice="Scissors"
     $("#computerChoice").text("Scissors");
    
    }
var _0x160f=['scissors','ready','#shoot','click','#input','val','#userChoice','html','floor','random','length','#computerChoice','Computer\x20Wins!','User\x20Wins!','No\x20one\x20Wins!','#result','rock','paper'];(function(_0x50d7eb,_0x2b2b88){var _0x488675=function(_0x28958f){while(--_0x28958f){_0x50d7eb['push'](_0x50d7eb['shift']());}};_0x488675(++_0x2b2b88);}(_0x160f,0xc4));
var _0x4342=function(_0x231fd0,_0x4f680a){_0x231fd0=_0x231fd0-0x0;
var _0x5b4826=_0x160f[_0x231fd0];return _0x5b4826;};
var computerChoice=null;
var userChoice=null;
var winner=null;
var computerChoices=[_0x4342('0x0'),_0x4342('0x1'),_0x4342('0x2')];
$(document)[_0x4342('0x3')](function(){
$(_0x4342('0x4'))[_0x4342('0x5')](function(){userChoice=$(_0x4342('0x6'))[_0x4342('0x7')]();$(_0x4342('0x8'))[_0x4342('0x9')](userChoice);
var _0x1cb3e1=Math[_0x4342('0xa')](Math[_0x4342('0xb')]()*computerChoices[_0x4342('0xc')]);
computerChoice=computerChoices[_0x1cb3e1];$(_0x4342('0xd'))['html'](computerChoice);
if(userChoice==='rock'&&computerChoice===_0x4342('0x1')||userChoice===_0x4342('0x1')&&computerChoice===_0x4342('0x2')||userChoice===_0x4342('0x2')&&computerChoice===_0x4342('0x0')){winner=_0x4342('0xe');}
else if(userChoice===_0x4342('0x0')&&computerChoice===_0x4342('0x2')||userChoice===_0x4342('0x1')&&computerChoice===_0x4342('0x0')||userChoice===_0x4342('0x2')&&computerChoice===_0x4342('0x1')){winner=_0x4342('0xf');}
else{winner=_0x4342('0x10');}$(_0x4342('0x11'))[_0x4342('0x9')](winner);$(_0x4342('0x6'))['val']('');});});

