//obtener el tipo de escritorio desde la url (get)
document.addEventListener("DOMContentLoaded", function () {
    //obtener la url completa
    var url = window.location.search;
    //Creamos la instancia
    var urlParams = new URLSearchParams(url);
    //Accedemos a los valores
    var tipo = urlParams.get('tipo');   
    
    if (tipo == 1){
        strTipo = "Escritorio individual"
    }else if (tipo == 2){
        strTipo = "Escritorio grupal"
    }else{
        strTipo = "Error! No definido"
    } 
    //input oculto con el valor a enviar
    document.getElementById('tipo').setAttribute('value', tipo);
    //label que muestra el tipo seleccionado al usuario
    document.getElementById('strTipo').innerHTML='Tipo de espacio: ' + strTipo;
  
})
