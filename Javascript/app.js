
/*let edad = 12


if (edad>=18) {
    console.log("Puedes conducir") 
    console.log("Puedes beber alcohol")
}
else
    if (edad>12) 
        console.log("Puedes tomar café")
    else   
        console.log("Puedes tomar colacao")*/

/*for (let i=1; i<=10; i++) {
    console.log(i)
}*/

/*let i=1
while(i<=10) {
    console.log(i)
    i++
}*/


function numeroAleatorio(max) {
    let numero=Math.floor(Math.random() * max ) + 1
    return numero
}

/*console.log(numero)*/

//loteria
/*let resultado = document.getElementById("resultado")
let numero = 0
let cantidad = 0
let carta = []
while(cantidad<6) {
    numero = numeroAleatorio(49)
    if (!carta.includes(numero)) {
        cantidad++
        carta.push(numero)
    }
}
console.log("El papel es: " + carta)

resultado.innerHTML = carta*/

//numero del cesar
let abecedario = "abcdefghijklmnñopqrstuvwxyz"
let frase="zzz  manzanas"
let paso=3
let fraseCifrada = ""
for (let i=0; i<frase.length; i++) {

    if (frase[i] === " "){
        fraseCifrada = fraseCifrada + " "
    }
    else {
        let pos = (abecedario.indexOf(frase[i]) + paso) % abecedario.length
    let letraCifrada = abecedario[pos]
    fraseCifrada += letraCifrada
    }
    
 
}
console.log(fraseCifrada)
