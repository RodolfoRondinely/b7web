let id= document.querySelector('#user').value
let psw= document.querySelector('#psw').value

function logar(){

    if (id =='rodolfo' && psw=='123') {
        //window.location.href = "https://curriculodigital.github.io/rodolforondinely/";
        alert('buu')
      }else {
         alert('LOGIN OU SENHA INCORRETOS , É VOCÊ MESMO ???')        
     }

    
}
let login = document.querySelector('#logar')

login.addEventListener('click',logar)

