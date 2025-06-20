function calculo(){

    let name = document.getElementById("name").value;
    let age  = parseInt(document.getElementById("age").value);
    let resultElement = document.getElementById("result");

    if( age <= 0 || isNaN(age) || !name ){
        resultElement.innerText= "Please enter valid values.";
        return;
    } else if(age>=18){
        resultElement.innerText= `Hi ${name}, you're of legal age. Get ready for great opportunities in the world of programming!`;
        return;
    }else{
        resultElement.innerText= `Hi ${name}, you're a minor. Keep learning and enjoying coding!`;
        return;
    }
    }