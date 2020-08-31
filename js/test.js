//var a = document.getElementById("result").innerHTML;
var rechnung=0;
var bildschirm="";

function hallo(c){
    bildschirm+=c;
    document.getElementById("result").innerHTML= bildschirm;
};

function mathexpression(e){
  switch (e) {
    case 10:
      bildschirm+='+';
      rechnung+='#+';
      document.getElementById("result").innerHTML= bildschirm;
    break;

    case 11:
      bildschirm+='-';
        rechnung+='#-';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    case 12:
      bildschirm+='*';
      rechnung+='#*';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    case 13:
      bildschirm+='/';
        rechnung+='#/';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    case 14:
    break;
    case 15:
      bildschirm+='%';
      rechnung+='#%';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    case 16:
      bildschirm='';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    default: alert("error");
    break;
  }
};
