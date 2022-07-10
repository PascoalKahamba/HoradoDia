function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var sms = document.querySelector('.ver')
    sms.innerHTML = `Agora são ${hora} horas.`
    var img = document.querySelector('#imagem')
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#e2cd9f'

    } else if (hora < 18) {
        //Boa tarde
        img.src = 'img/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#515154'
    }
}