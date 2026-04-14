function calcular_media(){
  //Referências aos elementos do HTML
    const nome_aluno = document.getElementById( "nome_aluno" );
    const nota1 = document.getElementById( "nota1" );
    const nota2 = document.getElementById( "nota2" );
    const nota3 = document.getElementById( "nota3" );
    const resposta = document.getElementById( "resposta" );

    let continuar;
    // Inicio do laço do...while
    do{
        //Pegando os valores atuais dos inputs
        let nome = nome_aluno.value;
        let n1 = ParseFloat( nota1.value ); // ParseFloat serve para pegar o texto e transformar em um número quebrado
        let n2 = ParseFloat( nota2.value );
        let n3 = ParseFloat( nota3.value );

        //Cálculo da média 3 notas
        let media = ( n1 + n2 + n3 ) / 3;

        //Criando um elemento de texto para exibir o resultado na tela
        const resultadoDiv = document.createElement( "div" );
        resultadoDiv.innerHTML = `<p><strong>Aluno:</strong>${nome}|<strong>Média:</strong>${media.toFixed(2)}</p>`;
        //                                                                                   adiciona casas no numero
        document.body.appendChild( resultadoDiv );

        //Verifica a resposta do campo S/N
        continuar = resposta.value.charAt( 0 ).toUpperCase();

        //Lógica de repetição:
        //Se for 'S', limpamos os campos para o usuário digitar
        //O próximo e o laço encerra sua volta atual.
            if (continuar === 'S'){
                nome_aluno.value = "";
                nota1.value = "";
                nota2.value = "";
                nota3.value = "";
                resposta.value = "";
            }

        document.getElementById( "media" ).innerHTML = nome_aluno + " obteve uma media de: " + media;
        console.log( nome_aluno );
        console.log( media );

        if ( resposta == "S" ) {
            console.log("Continua");
        } else {
            console.log("Pare");
        }
        
        console.log( media );
        document.getElementById( "nome_aluno" ).value = "";
        document.getElementById( "nota1" ).value = "";
        document.getElementById( "nota2" ).value = "";
        document.getElementById( "nota3" ).value = "";
        document.getElementById( "resposta" ).value = ""; 

    } while ( resposta == "S" );
}