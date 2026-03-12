//numero del cesar

let resultado = document.getElementById("resultado")
let frase = document.getElementById("frase")
let fraseBoomer = ""
let numMay = numeroAleatorio(1,2)

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

boton.addEventListener("click", (e) => {
    let opcion = numeroAleatorio(1,2)
    
    for (let i=0; i<=frase.length; i++) {
        let opcion = numeroAleatorio(1,2)
        
        if (opcion == 1) {
            fraseBoomer+=frase[0]
        }
        else
            pswd += caracteres[numeroAleatorio(0,caracteres.length-1)]

    }
        

        
    }


    resultado.innerHTML+=fraseBoomer
    

})







resultado.innerHTML = fraseBoomer
