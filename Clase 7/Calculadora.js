function sumar(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    console.log("El numero 1 es", numero1);
    console.log("El numero 2 es", numero2);

    let resultado = numero1 + numero2;
    console.log("El resultado es", resultado);

    document.getElementById("resultado").textContent = "Resultado de la suma es: " + resultado;
    console.log("La suma se hizo correctamente");
}

const resta = () => {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    
    let resultado = numero1 - numero2;

    document.getElementById("resultado").textContent = "Resultado de la resta es: " + resultado;
    console.log("La resta se hizo correctamente");
}

function multiplicar(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    
    let resultado = numero1 * numero2;

    document.getElementById("resultado").textContent = "Resultado de la multiplicación es: " + resultado;
    console.log("La multiplicación se hizo correctamente");
}

function dividir(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    
    if(numero2 === 0){
        document.getElementById("resultado").textContent = "Error: No se puede dividir por cero";
        console.log("Error en la división por cero");
        return;
    }
    
    let resultado = numero1 / numero2;

    document.getElementById("resultado").textContent = "Resultado de la división es: " + resultado;
    console.log("La división se hizo correctamente");
}