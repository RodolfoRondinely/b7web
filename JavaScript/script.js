function verde(){
    tiraCores()     /*REMOVE AS CLASSES VERMELHO , VERDE E AZUL*/
    document.querySelector('#exemplo1').classList.add('verde')//ADICIONA A CLASSE VERDE CRIADA NO CSS

}
function vermelho(){
    tiraCores()
    document.querySelector('#exemplo1').classList.add('vermelho')
}
function azul(){
    tiraCores()
    document.querySelector('#exemplo1').classList.add('azul')
}
function somar(x,y) {
    let t= x*y
    console.log(t);
}
function trocarimg(filename) {
    document.querySelector('.img').setAttribute('src','img/'+filename)
    
}
function clicar(){
    let clicar = document.querySelector("#exemplo1")

    clicar.innerHTML="texto inserido com innerHTML"
    
    
}
/*REMOVE AS CLASSES VERMELHO , VERDE E AZUL*/
function tiraCores() {
    document.querySelector('#exemplo1').classList.remove('vermelho')
    document.querySelector('#exemplo1').classList.remove('verde')
    document.querySelector('#exemplo1').classList.remove('azul')
}
/*troca background da body*/
function trocarBG(){
    document.querySelector('.bg').classList.add('bg1')
    
}





























