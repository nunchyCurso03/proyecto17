$(function () {
    console.log("Arrancamos");

    // Evento del botón 1: GET
    $("#boton1").on("click", function () {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes")
            .done(function () {
                // Si el GET es exitoso, actualiza el input
                $("#text1").val("ok");
                console.log("Botón 1: sale el ok")
            })
            .fail(function () {
                // Si el GET falla, muestra un mensaje de error
                console.error("Error al obtener datos del botón 1");
            });
    });

    // Evento del botón 2 :GET con ID específico
    $("#boton2").on("click", function () {


        $.get(`https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/2`)
            .done(function (data) {
                // Escribe "ok" en el input si se obtiene una respuesta
                $("#text2").val("ok");
                console.log("Botón 2: Datos obtenidos para el ID:", data);
            })
            .fail(function () {
                console.error("Error: No se encontró la solicitud con el ID ingresado.");
            });
    });

    // Evento del botón 3 : POST 
    $('#boton3').on('click', function () {
        $.post('https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes', function (data) {

            $('#text3').val('OK');
            console.log("Botón 3: Datos obtenidos ", data);

        }).fail(function () {

            // Mensaje de error si falla
            console.error("Error");
        });


        // evento botón4: PUT
        $('#boton4').on('click', function () {
            $.ajax({
                url: 'https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/1',
                type: 'PUT',
                data: { nombre: 'Nunchy', apellido: 'Prádanos' },

                success: function (data) {
                    $('#text4').val('OK');
                    console.log("Botón 4: Datos obtenidos :", data);
                }
            });


            // Evento botón4: DELETE
            $('#boton5').on('click', function () {
                $.ajax({
                    url: 'https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/1',
                    type: 'DELETE',
                    success: function () {
                        $('#text5').val('OK');
                        console.log("Botón 5: registro eliminado");
                    },
                });
            });
        });



    });






});
