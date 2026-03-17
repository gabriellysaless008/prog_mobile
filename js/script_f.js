function calcula_fahrenheit(){

    let celsius;
    let resultado;
    const FATOR_MULTIPLICADOR = 1.8;

    celsius = document.getElementById( "celsius" ).value;

    resultado = celsius * FATOR_MULTIPLICADOR + 32;
    //resultado = ( 9 * celcius + 160 ) / 5;

    document.getElementById( "resultado" ).innerHTML = resultado + " em Fahrenheit";
    console.log(resultado);

}