function plantilla (objeto) {
    /* let casaMayuscula = objeto.casa.charAt(0).toUpperCase()+objeto.casa.slice(1).toLowerCase()
    console.log(casaMayuscula) */
    return`
         <div id="${objeto.id}" class="datos">
              <img class="foto" src="${objeto.foto}" alt="hp">
              <p>Nombre: <b>${objeto.nombre}</b></p>
              <p>Casa: <b>${objeto.casa}</b></p>
              <p>Año de nacimiento: <b>${objeto.añoDeNacimiento}</b></p>
        </div>
        `
}

plantilla(personaje1)
console.log(personaje1)
plantilla(personaje2)
console.log(personaje2)

function renderCard(id,objeto) {
    let template = plantilla(objeto)
    let contenedor = document.getElementById(`${id}`)
    contenedor.innerHTML += template
    /* document.querySelector(`${id}`).innerHTML = plantilla */
}

/* renderCard("todos",personaje1)
renderCard("todos",personaje2)
renderCard("todos",personaje3)
renderCard("todos",personaje4)
renderCard("todos",personaje5) */

