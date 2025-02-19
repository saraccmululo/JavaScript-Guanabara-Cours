let numero=document.querySelector('input#txtn')
let lista=document.querySelector('select#flista')
let res=document.querySelector('div#res')
let valoresArray=[]
let n=Number(numero.value)
let v=valoresArray

function validNumber(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
        }
}

function inList(n, v){
    if(v.indexOf(Number(n))!=-1){
        return true 
    }else{
        return false
    }
}

function adicionar(){
    if (validNumber(numero.value) && !inList(numero.value,valoresArray)){
        valoresArray.push(Number(numero.value))
        let item=document.createElement('option')
        item.text=`Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou ja encontrado na lista')
    }
    numero.value=''
    numero.focus()
} 

function finalizar (){
    if(valoresArray.length==0){
        window.alert ('Adicione valores antes de finalizar')
    }else{
        let totNumber= valoresArray.length
        let bigNumber=valoresArray[0]
        let smallNumber=valoresArray[0]
        let soma=0
        let media=0
        for(let i=0; i<valoresArray.length; i++){
            soma=soma + valoresArray[i]
            if(valoresArray[i]>bigNumber){
                bigNumber=valoresArray[i]
            }
            if(valoresArray[i]<smallNumber){
                smallNumber=valoresArray[i]
            }
        }
        media=soma/totNumber
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo temos ${totNumber} numeros cadastrados.</p>`
        res.innerHTML+=`<p>O maior valor informado foi ${bigNumber}.</p>`
        res.innerHTML+=`<p>O menor valor informado foi ${smallNumber}.</p>`
        res.innerHTML+=`<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML+=`<p>A media dos valores digitados é ${media}.</p>`
    }
}