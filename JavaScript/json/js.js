let mostra = document.querySelector('.mostra')

// transforma string em JSON
let idade = JSON.parse('{"nome": "everaldo"}')

let pessoa = {

    nome:'Rodolfo Rondinely',
    idade:37
}
// transforma JSON em string 
let string = JSON.stringify({

    nome:'Rodolfo Rondinely'
})
mostra.innerHTML = `${idade.nome} <br>${pessoa.nome} <br> ${string}` 


    /* Call Back */
function alerta (){
    mostra.innerHTML = `função setTime interval testando assincronidade`
}
function outramsn (){
    mostra.innerHTML = `mudamos a mensagem, estou adorando isto . entao vou voltar com as variaveis 
    ${idade.nome} <br>${pessoa.nome} <br> ${string}
`
}
setTimeout(alerta,2000);

setTimeout(outramsn,4000)

    /*PROMISES*/

// ESTUDAR MUITO MESMO , PQ NAO ENTENDI QUASE NADA



    /*metodo FETCH*/
    /*retorna uma promessa  , tem dos paramentros a url e o outro é opcional geralmente configurações de requisiçoes*/


function loadPosts() {
    

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function(resultado) {             // recebe o resultado 
                 return resultado.json()            // json() retorna uma promisse em json
            })
            .then(function (json) {
                mostra.innerHTML=`${json.length}`;  // mostra o resultado
            })
            .catch(function (error) {               // captura o erro caso ocorra
                console.log("deu erro ");
            })
        }
    























