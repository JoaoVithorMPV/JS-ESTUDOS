function verificar() {
    data = new Date
    ano1 = data.getFullYear()

ano2 = document.getElementById('ano')
nao = document.getElementById('nao')
div2 = document.getElementById('div2')

if (ano.value.length == 0) {
    alert('[ERRO] Informe o ano de nascimento')
} else {
    radsex = document.getElementsByName('radsex')
    idade = ano1 - Number (ano2.value)
    genero = ''
    if (radsex[0].checked) {
        genero = 'Homen'
    } else if (radsex[1].checked) {
        genero = 'Mulher'
    } else if (radsex[2].checked) {
        genero = '"Não Informado"'
    }
    div2.innerHTML = `Detectamos que você é um(a) ${genero} com ${idade} anos`
}
}