$(document).ready(function() {

    const tripulacion = {
        luffy: {
            nombre: "Monkey D. Luffy", epiteto: "«Sombrero de Paja» (Mugiwara)", rol: "Capitán",
            origen: "Villa Foosha (East Blue)", imagen: "img/luffy.jpg", badgeClase: "bg-danger",
            recompensa: "฿ 30,000,000 (Saga East Blue)", habilidadTitulo: "Fruta del Diablo:",
            habilidadNombre: "Hito Hito no Mi: Modelo Nika",
            habilidadDesc: "Anteriormente conocida como Gomu Gomu no Mi (tipo Zoan Mítica). Convierte su cuerpo en goma y le otorga la libertad absoluta del Dios del Sol Nika."
        },
        zoro: {
            nombre: "Roronoa Zoro", epiteto: "«El Cazador de Piratas»", rol: "Espadachín / Primer Oficial",
            origen: "Villa Shimotsuki (East Blue)", imagen: "img/zoro.jpg", badgeClase: "bg-success",
            recompensa: "฿ 60,000,000 (Saga Alabasta - Tras vencer a Mr. 1)", habilidadTitulo: "Estilo de Combate:",
            habilidadNombre: "Santoryu (Tres Espadas) + Espadas Legendarias",
            habilidadDesc: "Maestro absoluto del combate con 3 katanas (Wado Ichimonji, Sandai Kitetsu y Enma). Capaz de cortar el fuego y montañas canalizando Haki."
        },
        sanji: {
            nombre: "Vinsmoke Sanji", epiteto: "«Pierna Negra»", rol: "Cocinero",
            origen: "Reino de Germa (North Blue)", imagen: "img/sanji.jpg", badgeClase: "bg-primary",
            recompensa: "฿ 77,000,000 (Saga Enies Lobby - Retrato dibujado)", habilidadTitulo: "Estilo de Combate:",
            habilidadNombre: "Estilo Pierna Negra + Ifrit Jambe",
            habilidadDesc: "Nunca usa las manos para pelear por respeto a la cocina. Con su exoesqueleto genético y pasión crea llamas azules de temperatura descomunal."
        },
        nami: {
            nombre: "Nami", epiteto: "«La Gata Ladrona»", rol: "Navegante",
            origen: "Villa Cocoyasi (East Blue)", imagen: "img/nami.jpg", badgeClase: "bg-warning text-dark",
            recompensa: "฿ 16,000,000 (Saga Enies Lobby)", habilidadTitulo: "Arma & Artefacto:",
            habilidadNombre: "Sorcery Clima-Tact + Zeus (Nube de Trueno)",
            habilidadDesc: "Bastón meteorológico científico mejorado con tecnología de Weatheria y complementado por Zeus, desatando tormentas devastadoras."
        },
        chopper: {
            nombre: "Tony Tony Chopper", epiteto: "«El Amante del Algodón de Azúcar»", rol: "Médico de la Tripulación",
            origen: "Isla de Drum (Grand Line)", imagen: "img/chopper.jpg", badgeClase: "bg-danger",
            recompensa: "฿ 50 (Saga Enies Lobby - Confundido con mascota)", habilidadTitulo: "Fruta del Diablo:",
            habilidadNombre: "Hito Hito no Mi (Humano-Humano) + Rumble Ball",
            habilidadDesc: "Reno que comió la fruta Humano-Humano. Gracias a sus Rumble Ball desbloquea múltiples transformaciones hasta convertirse en un titán."
        },
        robin: {
            nombre: "Nico Robin", epiteto: "«La Niña Demonio» / «Luz de la Revolución»", rol: "Arqueóloga",
            origen: "Ohara (West Blue)", imagen: "img/robin.jpg", badgeClase: "bg-secondary",
            recompensa: "฿ 79,000,000 (A los 8 años - Incidente de Ohara)", habilidadTitulo: "Fruta del Diablo:",
            habilidadNombre: "Hana Hana no Mi (Fruta Flor-Flor)",
            habilidadDesc: "Permite hacer florecer partes de su cuerpo en cualquier superficie o enemigo a su alcance visual como si fueran pétalos."
        }
    };

    function cargarPersonaje(id) {
        const p = tripulacion[id];
        if (!p) return;

        $(".btn-personaje").removeClass("activo").filter(`[data-id="${id}"]`).addClass("activo");

        $("#contenedor-cartel-dinamico").fadeOut(180, function() {
            $("#img-personaje-wanted").attr({ src: p.imagen, alt: p.nombre });
            $("#nombre-personaje").text(p.nombre);
            $("#epiteto-personaje").text(p.epiteto);
            $("#badge-rol").text(p.rol).attr("class", `badge ${p.badgeClase} px-2 py-1`);
            $("#badge-origen").text(p.origen);
            $("#monto-recompensa").text(p.recompensa);
            $("#titulo-habilidad").html(`<i class="bi bi-stars"></i> ${p.habilidadTitulo}`);
            $("#nombre-habilidad").text(p.habilidadNombre);
            $("#desc-habilidad").text(p.habilidadDesc);
            $("#info-habilidad").hide();
            $("#btn-ver-fruta").html('<i class="bi bi-eye"></i> Ver Habilidad Secreta');
            $(this).fadeIn(220);
        });
    }

    $(".btn-personaje").click(function() { cargarPersonaje($(this).data("id")); });

    $("#btn-ver-fruta").click(function() {
        $("#info-habilidad").slideToggle(300);
        const ver = $(this).text().includes("Ver");
        $(this).html(ver ? '<i class="bi bi-eye-slash"></i> Ocultar Habilidad' : '<i class="bi bi-eye"></i> Ver Habilidad Secreta');
    });

    $(".btn-ver-personaje-grid").click(function() {
        cargarPersonaje($(this).data("id"));
        $('html, body').animate({ scrollTop: $("#contenedor-cartel-dinamico").offset().top - 90 }, 500);
    });

});
