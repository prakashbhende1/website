var x,y;
var bd_ht = document.body.scrollHeight;
var bd_wd = document.body.offsetHeight


  function findPosY(obj)
  {
    var curtop = 0;
    if(obj.offsetParent)
        while(1)
        {
          curtop += obj.offsetTop;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
    return curtop;
  }

pos = findPosY(document.getElementById('lft-table'));

if (bd_ht > bd_wd) // all but Explorer Mac
{
	x = document.body.scrollWidth;
	y = document.body.scrollHeight;
}
else // Explorer Mac;
     //would also work in Explorer 6 Strict, Mozilla and Safari
{
	x = document.body.offsetWidth;
	y = document.body.offsetHeight;
}

if(screen.width == 800)
{
	y = y - pos;
}
if(screen.width == 1024)
{
	y = y - pos;
}
if(screen.width == 1280)
{
	y = y - pos;
}

if (bd_ht > bd_wd) // all but Explorer Mac
{
	x = document.body.scrollWidth;
	y = document.body.scrollHeight;
}
else // Explorer Mac;
     //would also work in Explorer 6 Strict, Mozilla and Safari
{
	x = document.body.offsetWidth;
	y = document.body.offsetHeight;
}

if(screen.width == 800)
{
	y = y - pos;
}
if(screen.width == 1024)
{
	y = y - pos;
}
if(screen.width == 1280)
{
	y = y - pos;
}

if (document.getElementById('lft-table'))
{
	document.getElementById('lft-table').style.height = y;
}
if (document.getElementById('rft-table'))
{
	document.getElementById('rft-table').style.height = y;
}
