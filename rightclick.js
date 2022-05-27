
//Disable right mouse click Script
//By Maximus (maximus@nsimail.com) w/ mods by DynamicDrive
//For full source code, visit http://www.dynamicdrive.com

var message="Welcome to www.prakashbhende.com";

///////////////////////////////////
function clickIE4(){
if (event.button==2){
alert(message);
return false;
}
}

function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;
}
}
}

if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}

document.oncontextmenu=new Function("alert(message);return false")

/*var errormsg="Welcome to www.hemcindia.com";
function mouseclick(evt)
{
if (document.layers)
rc = (evt.which==3);
if (document.all)
rc = (event.button==2);
if (rc)
{
alert(errormsg);
return false;
}
}
if (document.layers)
{ document.captureEvents(Event.MOUSEDOWN);
} 
document.onmousedown=mouseclick;
*/