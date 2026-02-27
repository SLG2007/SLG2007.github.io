function numeroAleatorio(max) {
    let numero=Math.floor(Math.random() * max ) + 1
    return numero
}
n = 6
console.log(numeroAleatorio(n))