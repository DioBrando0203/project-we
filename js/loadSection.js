function loadSection(id, file, callback) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        });
}

loadSection("navbar", "/sections/navbar.html", function() {
    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();

    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        btnMenu = $('#btn-menu'),
        icono = $('#btn-menu .icono-menu');

    if (ancho < 700) {
        enlaces.hide();
        icono.addClass('fa-bars');
    }

    btnMenu.on('click', function(e) {
        enlaces.slideToggle();
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');
    });

    $(window).on('resize', function() {
        if ($(this).width() > 1023) {
            enlaces.show();
            icono.addClass('fa-times');
            icono.removeClass('fa-bars');
        } else {
            enlaces.hide();
            icono.addClass('fa-bars');
            icono.removeClass('fa-times');
        }
    });
});

loadSection("hero", "/sections/hero.html");
loadSection("historia", "/sections/historia.html");
loadSection("eleccion", "/sections/eleccion.html");
loadSection("categoria", "/sections/categoria.html");
loadSection("productos", "/sections/productos.html");
loadSection("testimonios", "/sections/testimonios.html");
loadSection("contacto", "/sections/contacto.html");
loadSection("footer", "/sections/footer.html");
