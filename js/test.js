//var a = document.getElementById("result").innerHTML;
var a=0;
var bildschirm="";

function hallo(c){
    bildschirm+=c;
    document.getElementById("result").innerHTML= bildschirm;
};

function mathexpression(e){
  switch (e) {
    case 10:
      bildschirm+='+';
      document.getElementById("result").innerHTML= bildschirm;
    break;

    case 11:
      bildschirm+='-';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    case 12:
      bildschirm+='*';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    case 13:
      bildschirm+='/';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    case 14:
      bildschirm+='=';
    break;
    case 15:
      bildschirm+='%';
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
