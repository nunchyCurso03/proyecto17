$ (function() {     
     console.log ("Arrancamos");


     let solicitudes = [{
        "id": 1, 
        "nombre": "Juan",
        "apellido": "Secreto"
    }, {
        "id": 2, 
        "nombre": "Antonio",
        "apellido": "Pero"
    }, {
        "id": 3, 
        "nombre": "de la Encarnación",
        "apellido": "No tanto"
    }];

    $("#boton1").on("click",function(){
    $.get("https://my-json-server.typicode.com/nunchyCurso03/proyecto17/solicitudes")
        $("#text1").text("ok");

    })
});