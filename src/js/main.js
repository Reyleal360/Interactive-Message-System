function calculo() {
    // part where the data is stored in the variable

    let name = document.getElementById("name").value;
    let ageValue = document.getElementById("age").value;
    let age = parseInt(ageValue);
    let resultElement = document.getElementById("result");

    // Validar si no es un entero
    if (
        age <= 0 ||
        isNaN(age) ||
        !name.trim() ||
        !Number.isInteger(Number(ageValue))
    ) {
        resultElement.innerText = "Please enter valid values (no decimals).";
        return;
    }

    if (age >= 18) {
        resultElement.innerText = `Hi ${name}, you're of legal age. Get ready for great opportunities in the world of programming!`;
    } else {
        resultElement.innerText = `Hi ${name}, you're a minor. Keep learning and enjoying coding!`;
    }
}
