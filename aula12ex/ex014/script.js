function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 21
    
    msg.innerHTML= `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#e6d3c4'
        // BOM DIA
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#d7936e'
        // BOA TARDE
    } else {
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background ='#195d8a'
        // BOA NOITE
    }
}

