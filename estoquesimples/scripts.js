function regis(){
    
    let placa =[document.querySelector("#placa").value]
    let valor =[document.querySelector("#valor").value]


let html = '<ul>'
    for (let i in placa ) {
        html+= '<li>' +placa[i]+'valor R$ '+valor+'</li>'
    html+='</ul>'
}
    document.querySelector('#res')
    res.innerHTML=`CARRO COM PLACA ${html}`
    let registro=[html]
    
    console.log(registro);
    res.innerHTML=`CARRO COM PLACA ${registro.value}`



}

