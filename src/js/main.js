function calculo(){

    let name = document.getElementById("name").value;
    let age  = parseInt(document.getElementById("age").value);
    let resultElement = document.getElementById("result");

    if( age <= 0 || isNaN(age) || !name ){
        resultElement.innerText= "Please enter valid values.";
        return;
    } else if(age>=18){
        resultElement.innerText= `Hello ${name},you are of legal age.`;
        return;
    }else{
        resultElement.innerText= `Hello ${name}, you are not of legal age.`;
        return;
    }
    }