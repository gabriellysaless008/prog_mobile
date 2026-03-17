function cacula_velocidadeMedia(){

    let distancia;
    let tempo;
    let velocidadeMedia;

    distancia = document.getElementById( "distancia" ).value;
    tempo = document.getElementById( "tempo" ).value;

    velocidadeMedia = ( distancia / tempo );

    document.getElementById( "velocidadeMedia" ).innerHTML = velocidadeMedia + " Khm/h ";
    console.log(velocidadeMedia);




}