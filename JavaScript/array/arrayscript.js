let carro =['uno','bravo','duster','camaro']/*array em javascript*/

let numeros =['1','2','3','4','5','6']
console.log(carro);
carro.push('ferrari')           //adiciona na ultmma posição u mitem no array
carro.push('roiceroice')        
carro.sort()                    //ordem alfabetica
carro.reverse()                 //ordem alfatetica inversa


numeros.sort()
numeros.push('14')


let res = carro.concat(numeros)     //concatenar um array com outro
console.log(res);    

res.splice(2,1)                     //remove o item 1 apartir do 0 sera removido ferrari
console.log(res);

/*objeto JSON*/
let funcionarios ={
    nome:'Rodolfo',
    idade:'37',
    função:'Web Developer'
}
console.log(`O ${funcionarios.nome} possui um ${carro[0]}, tem ${funcionarios.idade} e tem a função de ${funcionarios.função} `);
console.log(carro);
console.log(numeros);













