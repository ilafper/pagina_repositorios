$(document).ready(function(){
    let lista=[
        {
            img:"/imagenes/imagen33.png",
            nombre:"ACTV 2",
            desc:"https://github.com/ilafper/refactorActividad2"
        },
        {
            img:"imagenes/imagen33.png",
            nombre:"Act JQUERY1",
            desc:"https://github.com/ilafper/jquery_eliminar-y-crear"
        },
        {
            img:"imagenes/imagen33.png",
            nombre:"Act JQUERY2",
            desc:"https://github.com/ilafper/ejercicio_busqueda_marcas"
        },
        {
            img:"imagenes/imagen33.png",
            nombre:" Act 3 en raya",
            desc:"https://github.com/ilafper/3-en-raya"
        },
        {
            img:"imagenes/imagen33.png",
            nombre:"Act JQUERY0",
            desc:"https://github.com/ilafper/Jquery_ivan"
        },
        {
            img:"imagenes/imagen33.png",
            nombre:"Act CONTORNOS",
            desc:"https://github.com/ilafper/Actividad-9-Herencia-y-Polimorfismo"
        },
        {
            img:"imagenes/imagen33.png",
            nombre:"Biblioteca",
            desc:"https://github.com/ilafper/Biblioteca_ivan"
        },
        {
            img:"imagenes/imagen33.png",
            nombre:"Biblioteca2",
            desc:"https://github.com/ilafper/Biblioteca_ivan"
        }
    ]


    for (const persona of lista) {

        let nuevaCarta =
            `<div class="targeta">
                <div class="izquierda">
                    <img src=${persona.img} />
                </div>
                <div class="derecha">
                    <h2 class="card-title">${persona.nombre}</h2>
                    <a href="${persona.desc}">Enlace(Pincha aqui)</a>
                </div>
            </div>`;
        
        $(".wrap").append(nuevaCarta);
    }

    $(".botonInput").click(function () {
        let nombreUsuario = $(".input[type='text']").val().toLowerCase();
        //Limpiar el contenedor de cartas antes de agregar nuevas cartas
        $(".wrap").empty();

        for (const persona of lista) {
            if (persona.nombre.toLowerCase() === nombreUsuario) {
                let nuevaCarta = `
                <div class="targeta">
                    <div class="izquierda">
                        <img src=${persona.img} />
                    </div>
                    <div class="derecha">
                        <h2 class="card-title">${persona.nombre}</h2>
                        <p>${persona.desc}</p>
                    </div>
                </div>`
                ;
                
                $(".wrap").append(nuevaCarta);
            }
        }
    });
});