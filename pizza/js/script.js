/*FUNCAO PARA ABRIR O MODAL AO CLICAR NA DIV DIVPLUS */

document.querySelector(".divplus").addEventListener("click", function(){
  document.querySelector('.modal').style.display='flex'
    
})

/*Antes era como abaixo, apos um dia de estudo alterei para como se ve acima */


// if (document.querySelector('.modal').style.display=='none') {
//     document.querySelector('.modal').style.display='flex'  
    
//   } else {
//      document.querySelector('.modal').style.display='flex'
    
//  }

// })

/*FUNCAO PARA FECHAR O MODAL  AO CLICAR NO EMOJI FECHAR COM A CLASSE FECHAR*/

// let fechar = document.querySelector(".close").addEventListener("click", function(){

//     if (document.querySelector('.modal').style.display=='flex') {
//         document.querySelector('.modal').style.display='none'
        
//     } else {
//         document.querySelector('.modal').style.display='none'
        
//     }

// })

/*Evolução de 1 dia botao fechar, de 6 linhas para 2 ,funcção pega a classe fechar e adicona o evento click, apos pega a classe
modal e altera o display para none , fechando a janela modal , ameiiiiiii */
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.modal').style.display='none'
})

/*ao clicar no btn da classe modal de compra, a classe Car, aparecerá e o carrinho de compras sera exibido com  o resultado da compra*/
document.querySelector('#btnModalCompra').addEventListener('click',function(){
    document.querySelector('.car').style.width='400px'
})

//div que exibe o valor do produto
let soma = document.querySelector('.modalPrecoTotal')

document.querySelector('#btnP').addEventListener('click',function(){
    soma.innerHTML=10
})
document.querySelector('#btnM').addEventListener('click',function(){
    soma.innerHTML=15.99
})
document.querySelector('#btnG').addEventListener('click',function(){
    soma.innerHTML=40
})

/*SOMAR 10 REAIS AO INTEM PEQUENO*/
document.querySelector('#imgprecoPPlus').addEventListener('click',function(){

let plusOne = document.querySelector('.modalPrecoTotal')
   
        soma.innerHTML=Number(soma.textContent)+10

})
document.querySelector('#imgprecoPMinus').addEventListener('click',function(){

    let plusOne = document.querySelector('.modalPrecoTotal')
    
    soma.innerHTML =Number(soma.textContent)-10
    })

    /*SOMAR 15.99 REAIS AO INTEM PEQUENO*/
document.querySelector('#imgprecoMPlus').addEventListener('click',function(){

    let plusOne = document.querySelector('.modalPrecoTotal')
       
            soma.innerHTML=Number(soma.textContent)+15.99
    
    })
    document.querySelector('#imgprecoMMinus').addEventListener('click',function(){
    
        let plusOne = document.querySelector('.modalPrecoTotal')
        
        soma.innerHTML =Number(soma.textContent)-15.99
        })
        /*SOMAR 40 REAIS AO INTEM PEQUENO*/
document.querySelector('#imgprecoGPlus').addEventListener('click',function(){

    let plusOne = document.querySelector('.modalPrecoTotal')
       
            soma.innerHTML=Number(soma.textContent)+40
    
    })
    document.querySelector('#imgprecoGMinus').addEventListener('click',function(){
    
        let plusOne = document.querySelector('.modalPrecoTotal')
        
        soma.innerHTML =Number(soma.textContent)-40
        })
    
    
/*Ao clicar o carrinho recebe o valor do item
    Fiz sozinho , estou adorando até me achando como um dev Junior kkkk
*/
document.querySelector('#btnModalCompra').addEventListener('click',function(){
    let subtotal = document.querySelector("#subTotalValor")
    
    subtotal = document.querySelector('.modalPrecoTotal').textContent
    document.querySelector('.totalValor').innerHTML=subtotal

/*Transformando a varial subtotal de string para numero*/
    let s= Number(subtotal)

/*Caucular o preço total com desconto de 10%*/

    let des = document.querySelector("#desconto")
  
    des.innerHTML = s/10
    
    res = Number(des)

    let tt= Number(`${s}+${res}`)

    console.log(tt);
/*cauculando o valor total do pedido*/
let tvalor = document.querySelector('#tvalor')

    tvalor.innerHTML= document.querySelector("#desconto").value + document.querySelector(".totalValor")
    


console.log(typeof s);
console.log(typeof des);
console.log(typeof res);
console.log(typeof tvalor);



    
    
})
    



















