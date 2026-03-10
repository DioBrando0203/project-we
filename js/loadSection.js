function loadSection(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadSection("hero", "/sections/hero.html");
loadSection("historia", "/sections/historia.html");
loadSection("eleccion", "/sections/eleccion.html");
loadSection("categoria", "/sections/categoria.html");
loadSection("productos", "/sections/productos.html");