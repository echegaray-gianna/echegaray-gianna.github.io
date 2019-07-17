document.getElementById("first").addEventListener("touchend", f);
document.getElementById("second").addEventListener("touchend", f);
document.getElementById("third").addEventListener("touchend", f);
document.getElementById("fourth").addEventListener("touchend", f);
document.getElementById("fifth").addEventListener("touchend", f);
document.getElementById("sixth").addEventListener("touchend", f);
document.getElementById("seventh").addEventListener("touchend", f);
document.getElementById("eigth").addEventListener("touchend", f);
document.getElementById("nineth").addEventListener("touchend", f);

let playerturn = true; 

function f(ev) {   
    console.log(ev.touches);

    if(playerturn){
    
    document.getElementById("board").innerHTML= "X";
 
    playerturn = false;

    console.log (playerturn);

    } else  {
        
        document.getElementById("board").innerHTML= "O";

        playerturn = true; 
        console.log (playerturn);
    }
};





