//var a = document.getElementById("result").innerHTML;
var rechnung="";
var bildschirm="";
var safer;

//Bildschirmausgabe
function output(c){
    rechnung+=c;
    bildschirm+=c;
    document.getElementById("result").innerHTML= bildschirm;
};

function mathexpression(e){
  switch (e) {
    case 10:
      bildschirm+='+';
      rechnung+='#+#';
      document.getElementById("result").innerHTML= bildschirm;
    break;

    case 11:
      bildschirm+='-';
        rechnung+='#-#';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    case 12:
      bildschirm+='*';
      rechnung+='#*#';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    case 13:
      bildschirm+='/';
        rechnung+='#/#';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    case 14:
      calculate();
    break;
    case 15:
      bildschirm+='%';
      rechnung+='#%#';
      document.getElementById("result").innerHTML= bildschirm;
    break;
    case 16:
      bildschirm='0';
      rechnung='';
      safer=undefined;
      document.getElementById("result").innerHTML= bildschirm;
      bildschirm='';
    break;
    default: alert("error");
    break;
  }
};

function calculate(){

  safer=rechnung.split("#");
  //now we are calculating

//strenge rechenregeln
  for(let i=0;safer.length>i;i++){
    if(safer[i]=='*'){
      safer[i+1]=parseFloat(safer[i-1])* parseFloat(safer[i+1]);
      safer[i-1]="$";
      safer[i]="$";
    }

    else if(safer[i]=='/'){
      safer[i+1]=parseFloat(safer[i-1])/parseFloat(safer[i+1]);
      safer[i-1]="$";
      safer[i]="$";
    }

    else if(safer[i]=='%'){
      safer[i+1]=parseInt(safer[i-1]) % parseInt(safer[i+1]);
      safer[i-1]="$";
      safer[i]="$";
    }
  }
      /// $$$$1+1+$$4+5
      //$$$$##2+$$4+5
      //$$$$####$$6+5
      //$$$$####$$##11
      //lastindex end;
      //rechnung für die laschen rechenregeln

  for(let i=0;safer.length>i;i++){
  //safer wieder cutten für die einfache rechnung
    if(safer[i]=='+'){
      for(let g=i+1;g<safer.length;g++){
        if(safer[g]!="$"){
          console.log(safer[g]);
          safer[g]= parseInt(safer[g])+ parseInt(safer[i-1]);
          safer[i]='#';
          safer[i-1]='#';
          break;
        }
      }
    }
    else if(safer[i]=='-'){
      for(let g=i+1;g<safer.length;g++){
        if(safer[g]!="$"){
          safer[g]=parseFloat(safer[g])-parseFloat(safer[i-1]);
          safer[i]='#';
          safer[i-1]='#';
          break;
        }
      }
    }
  }
        document.getElementById("result").innerHTML=safer[safer.length-1];
};
