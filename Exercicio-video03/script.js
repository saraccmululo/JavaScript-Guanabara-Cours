function verificar(){   
    var date=new Date ()
    var ano=date.getFullYear()
    var anodigitado = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (anodigitado.value.length==0||Number(anodigitado.value)>ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex=document.getElementsByName ('radsex')
        console.log(fsex)
        var idade = ano - Number (anodigitado.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero =''
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        //é o mesmo que ir no html e colocar <img id='foto'> mas criado nesse arquivo atraves do JS, para criar imagens dinamicas.
        if(fsex[0].checked){
            genero='Homem'
            if(idade >=0 && idade<12){
                img.setAttribute('src', 'imagem/toddlerboy.png')
            }else if(idade<21){
                img.setAttribute('src', 'imagem/youngman.png')
            }else if(idade<65){
                img.setAttribute('src', 'imagem/adultman.png')
            }else{
                img.setAttribute('src', 'imagem/seniorman.png')
            }
               
        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade >=0 && idade<12){
                img.setAttribute('src', 'imagem/toddlergirl.png')
            }else if(idade<21){
                img.setAttribute('src', 'imagem/youngwoman.png')
            }else if(idade<65){
                img.setAttribute('src', 'imagem/adultwoman.png')
            }else{
                img.setAttribute('src', 'imagem/seniorwoman.png')
            }
               
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //serve para adicionar a foto abaixo da frase acima.
    }
}
