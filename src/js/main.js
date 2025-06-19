function calculo(){

    let name = document.getElementById("name").value;
    let age  = parseInt(document.getElementById("age").value);
    let resultElement = document.getElementById("result");

    if( age <= 0 ){
        resultElement.innerText= "por favor, ingresa valores validos.";
        return;
    } else if(age>=18){
        resultElement.innerText= `Hola ${name}, eres mayor de edad.`;
        return;
    }else{
        resultElement.innerText= `Hola ${name}, eres menor de edad.`;
        return;
    }
    }