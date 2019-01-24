/**
 * js aula 08
 * @author Marcus
 */

 var check = false;

 function xequemate() {
     if(check == false){
        var time1 = setInterval(function(){ Start() }, 1000 );
        var time2 = setTimeout(function(){ end()}, 13200);
        var count = 5 ;
        function Start(){
            soundbeep();
            document.getElementById("time").innerHTML = count;
            if(count == 1){
                clearInterval(time1);
                soundthunder();
                document.getElementById("fire").src = "explosion.gif" ;
                document.getElementById("time").innerHTML = " GAME OVER " ;
            }
            count -- ;
        }
       check = true;
     }
  }

  function soundthunder(){
    var beep = new Audio();
    beep.src = "Thunder_Crack.mp3";
    beep.play();
  }

  function soundbeep(){
    var beep = new Audio();
    beep.src = "Beep_Short.mp3";
    beep.play();
  }

  function end() {
      document.getElementById("fire").src = "cave.jpg";
  }