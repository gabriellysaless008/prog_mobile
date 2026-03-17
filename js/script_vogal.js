function verifica_vogal(){

    let letra;

    letra = document.getElementById( "letra" ).value;

    if ( letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U"){
        document.getElementById( 'resultado' ).innerHTML = "Vogal";
    } else {
        document.getElementById( 'resultado' ).innerHTML = "Consoante";
    } 

    console.log(letra);
    
}