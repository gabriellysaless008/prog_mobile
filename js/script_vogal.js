function verifica_vogal(){

    let letra;

    letra = document.getElementById( "letra" ).value;

    if ( letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        document.getElementById( 'resultado' ).innerHTML = "Vogal";
    } else {
        document.getElementById( 'resultado' ).innerHTML = "Consoante";
    }
    
}