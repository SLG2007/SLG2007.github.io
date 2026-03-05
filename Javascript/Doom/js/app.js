//variables
let num1=document.getElementById("numero1")
let num2=document.getElementById("numero2")
let boton=document.getElementById("run")


//eventos
boton.addEventListener("click", (e) => {
    /*console.log("El resultado de " + num1.value + " por " + num2.value + " es " + (parseInt(num1.value) + parseInt(num2.value)))

    salida.innerHTML=("El resultado de " + num1.value + " por " + num2.value + " es " + (parseInt(num1.value) + parseInt(num2.value)))*/
    salida.innerHTML=""
    for (let i=0; i<parseInt(num2.value); i++) {
        salida.innerHTML+=num1.value + "<br>"
    }

})

//main