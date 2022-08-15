let personajes = [personaje1,personaje2,personaje3,personaje4,personaje5]


function renderEach (id,objeto) {
    objeto.forEach(element => renderCard(id,element))
}
renderEach("todos",personajes)



/* function renderMap (id,objeto) {
    let maping = objeto.map(element => renderCard(id,element))
    return maping
}
renderMap("todos",personajes) */


function filter (id,objeto) {
    let arrayFiltrado = objeto.filter(element => element.añoDeNacimiento>1979)
    renderEach ("todos",arrayFiltrado)
}
filter("mayores",personajes)