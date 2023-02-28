function contar() {
ini = document.getElementById('ini')
fim = document.getElementById('fim')
sal = document.getElementById('sal')
div2 = document.getElementById('div2')

    if (ini.value.length == 0 || ini.value.length == 0 || ini.value.length == 0) {
    alert('[ERRO]')
    } else {
        div2.innerHTML += 'Resultado:'  
        i= Number(ini.value)
        f= Number(fim.value)
        s= Number(sal.value)

        for (c = i; c <= f; c += s) {
            div2.innerHTML += `\u{1F595} ${c} `
        }
       div2.innerHTML += '\u{1F4A9}'
    }
}