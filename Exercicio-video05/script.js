function contar(){
    var ini=document.querySelector('input#txti')
    var fim=document.querySelector('input#txtf')
    var passo=document.querySelector('input#txtp')
    var res=document.querySelector('div#res')
    if(ini.value.length==0||fim.value.length==0||passo.value.length==0){
        res.innerHTML= 'Impossivel contar'
        window.alert('Erro!Faltam dados!')
    }else{
        res.innerHTML='Contando: <br>'
        var i=Number(ini.value)
        var f=Number(fim.value)
        var p=Number(passo.value)
        if(p<=0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p=1
        }
        
        if(f>i){
            var c=i
            while (c<=f){
            res.innerHTML+=` ${c}\u{1F449}`
            c+=p}
        }else if(f<i){
            var c=i
            while (c>=f){
            res.innerHTML+=` ${c}\u{1F449}`
            c-=p
        }
        }
        res.innerHTML+=`\u{1F3C1}`
    }
}