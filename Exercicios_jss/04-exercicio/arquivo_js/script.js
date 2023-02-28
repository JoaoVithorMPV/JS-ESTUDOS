function contar() {
    ini = document.getElementById('ini')
    fim = document.getElementById('fim')
    pas = document.getElementById('pas')
    res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] Por favor preecha todos os campos solicitados abaixo!')
    } else {
        res.innerHTML = 'Contando: '
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(pas.value)

        for (c = i; c <= f; c += p) {
            res.innerHTML += `\u{1F595} ${c} `
        }
        res.innerHTML += ` \u{1F4A9}`
    }
}