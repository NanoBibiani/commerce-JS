/* const url = "http://hp-api.herokuapp.com/api/characters"

fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data) // muestra personajes
}) */

let cantidad = -1

//
while (cantidad<0 || isNaN(cantidad)) {
     cantidad = parseInt(prompt("ingrese cantidad de personajes a subir a la base de datos:"))
    console.log(cantidad)
}

let arrayDePersonajes = []
if (cantidad>0) {
    for (let i=1; i<=cantidad; i++) {
        let nombre = ""
        while (nombre.length<4) {
            nombre = prompt("ingrese el nombre del personaje " +i+ ":")
            //console.log(nombre)
        }
        let houseHogwarts = ""
        while(houseHogwarts.length<4) {
             houseHogwarts = prompt("ingrese el nombre de la casa del personaje " +nombre+ ":")
             //console.log(houseHogwarts)
        }
        let foto = ""
        while(foto.length<10) {
            foto = prompt("ingrese la foto del personaje " +nombre+ " de la casa " +houseHogwarts+ ":")
            //console.log(foto)
        }
        let añoDeCumpleaños = ""
        while(isNaN(añoDeCumpleaños) || añoDeCumpleaños<1900) {
            añoDeCumpleaños = parseInt(prompt("ingrese el año donde cumple " +nombre+ " de la casa " +houseHogwarts+ ":"))
            //console.log(añoDeCumpleaños)
        }
        let personaje = {
            nombre: nombre,
            houseHogwarts : houseHogwarts,
            foto : foto,
            añoDeCumpleaños : añoDeCumpleaños
        }
        //console.log(personaje)
        personaje.id = parseInt(Math.random()*1000000)
        //console.log(personaje)
        arrayDePersonajes.push(personaje)
    }

}

console.log(arrayDePersonajes)