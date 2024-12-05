function hor() {
    window.document.getElementById('respost')
    var agora = new Date
    hora = agora.getHours()
    minuto =  agora.getMinutes()
    var segundo = agora.getSeconds()

    if (hora < 10) hora = '0' + hora;
    if (minuto < 10) minuto = '0' + minuto;
    if (segundo < 10) segundo = '0' + segundo;

    if (hora < 12) {
        respost.innerText = (`São exatamente ${hora}:${minuto}:${segundo} horas Bom Dia!`)
    } else if (hora < 18) {
        respost.innerText = (`São exatamente ${hora}:${minuto}:${segundo} Boa Tarde!`)
    } else {
        respost.innerText = (`São exatamente ${hora}:${minuto}:${segundo} Boa Noite!`)
    }
}


function voto() {
    var vot = window.document.getElementById('idade')
    var respos = window.document.getElementById('respos')
    var vot = Number(vot.value)
    if (vot < 16 ) {
        respos.innerText = `Você tem ${vot} não voto !!!`
    } else if (vot < 18 || vot > 65) {
        respos.innerText = `Você tem ${vot} anos de idade e seu voto é opcional !!`     
    } else  {
        respos.innerText = `Você tem ${vot} anos de idade e seu voto é obrigatório !!`
    }    
}

function resposta() {
    var n1 = window.document.getElementById('idig')
    var resp = window.document.getElementById('resp')
    var n1 = Number(n1.value)
    if (n1 % 2 == 0) {
        resp.innerText = 'O número digitado é par!!!'
    } else {
        resp.innerText = 'O número digitado é impar!!'
    }

}

var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'clicou!'
    a.style.background = 'red'
}

function entrar() {
    a.innerText = 'Entrou!'
    a.style.background = 'green'
}

function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'yellow'
}

//bot.addEventListener('onclick', somar())
function somar() {
   // var bot = window.document.getElementById('botao')
    var n1 = window.document.getElementById('itxtn1')
    var n2 = window.document.getElementById('itxtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    var s = n1 + n2
    res.innerText = `A soma entre ${n1} e ${n2} é iqual a ${s}`
}