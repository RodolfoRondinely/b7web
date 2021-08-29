let carros=['GOL','PALIO','UN0','COROLLA','CORSA','MONZA','tesla']

let a='<ul>'

for (const i in carros) {

      a+= '<li>'+carros[i] +'</li>'
    
    document.querySelector(".resultado").innerHTML=a

    a +='</ul>'

}
console.log(carros.length);
carros.push('rodolfo')
carros.push('rondinely')
carros.push('   enzo')
console.log(carros);
console.log(carros.length);

for (const i in carros) {

      a+= '<li>'+carros[i] +'</li>'
    
    document.querySelector(".resultado").innerHTML=a

    a +='</ul>'

}
