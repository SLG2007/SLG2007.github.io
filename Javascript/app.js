
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

let numero = numeroAleatorio(20)

console.log(numero)