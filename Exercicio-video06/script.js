function tabuada(){
var numero=document.querySelector('input#txtn')
var res=document.querySelector('select#resultado')
    if(numero.value.length==0){
     window.alert('Por favor, digite um numero!')
    }else{
        var n=Number(numero.value)
        var c=1
        res.innerHTML=''
        for(var c=1; c<=10; c++){
            var item = document.createElement('option')
            item.text=`${n} x ${c} = ${n*c}`
            item.value=`res${c}`
            res.appendChild(item)}
        //while(c<=10){ 
        //var item = document.createElement('option')
        //item.text=`${n} x ${c} = ${n*c}`
        //res.appendChild(item)
        //c++}
        
    }  
}
