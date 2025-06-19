function calculo(){

    let name = document.getElementById("name").value;
    let age  = parseInt(document.getElementById("age").value);
    let resultElement = document.getElementById("result");

    if( age <= 0 ){
        resultElement.innerText= "por favor, ingresa valores validos.";
        return;
    } else if(age>=18){
        resultElement.innerText= "por favor, ingresa valores validos.";
        return;
    }else{
        resultElement.innerText= "por favor, ingresa valores validos.";
        return;
    }
    }