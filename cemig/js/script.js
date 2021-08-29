const dc = (el)=>document.querySelector(el)


function msn (){
    
    let data = new Date
    
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()

    let horas = `${h}:${m}:${s}`
    let horaEnvio = ''
    dc('.center').innerHTML= `TELA SD/MP <br> ${horas} <br><br> Atente-se ao horário de envio, <br><br>a tela ficará vermelha quando for para envia-la
    `
    if (h ==6 && m <30 || h==10 && m <30||  h== 18 && m <30 || h==21 && m <30) {
        dc('.center').style.backgroundColor ="red"
        dc('.center').innerHTML=`
        <div class="tela">
            <h1>Enviar  Tela ${h}:${m}:${s} </h1>
               <h2> print da TELA SD/MP no grupo WhatsApp </h2>
                 <a href="https://rodolforondinely.github.io/cemig/" target="blanck"> para enviar clique aqui

         </div>
        `
    } else {
        dc('.center').style.backgroundColor ="green"
    }

}

let timer = setInterval(msn,1000)
