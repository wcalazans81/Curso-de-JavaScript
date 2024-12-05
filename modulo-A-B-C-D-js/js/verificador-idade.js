function verificar() {
    var date = new Date()
    var ano = date.getFullYear() //pega o ano atual com 4 digitos
    var fano = document.getElementById('txtano')
    var res = document.getElementById('txtres')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')// criar tag ou elemento via javaScript
        img.setAttribute('id', 'foto') // criar ID via javaScript
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', '../imagens/patutinho300.png')
            } else if (idade >= 10 && idade < 30) {
                //jovem
                img.setAttribute('src', '../imagens/cagadao300.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '../imagens/imagem-audio300.png')
            } else {
                //idoso
                img.setAttribute('src', '../imagens/tiao300.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', '../imagens/patutinha250.png')
            } else if (idade >= 10 && idade < 30) {
                //jovem
                img.setAttribute('src', '../imagens/cagadinha300.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '../imagens/linda300.png')
            } else {
                //idoso
                img.setAttribute('src' ,'../imagens/mainha300.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}