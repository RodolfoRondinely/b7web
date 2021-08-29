let modelo= 'chevet'
let marca= ''

switch (modelo) {
    case 'uno':
        marca= 'FIAT'
    break;
        case 'chevet':
        marca= 'CHEVROLET'
document.querySelector('.resultado').innerHTML=`O modelo de carro escolhido foi ${modelo}, da marca ${marca}`

    break;
    default:
        document.querySelector('.resultado').innerHTML=`Nenhuma classe de carro escolhida`
    break;
}
