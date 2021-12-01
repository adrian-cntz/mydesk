//Este script se incluye en seleccionar-turno.ejs
//Genera una lista con espacios disponibles para reservar en una determinada fecha

document.addEventListener("DOMContentLoaded", function () {
    //recibir tipo de espacio por GET y setearlo en el valor del input "cat"
        var cat = $_GET("cat");
        document.getElementById("cat").setAttribute("value", cat);
    //guardar fecha en variable dateInput     
    var dateInput = date.value();
    })
    //actualizar fecha seleccionada en variable dateInput      
    date.addEventListener("change", function() {
        var dateInput = this.value;
    })
    update.addEventListener("click",function(){ 
    //convertir fecha al formato local    
        var dmyDate = dateInput.split("/").reverse().join("-");
    //mostrar fecha seleccionada en el titulo de la lista
        document.getElementById("dateOutput").innerHTML = "Turnos disponibles para el día " + dmyDate;  
    // generar lista de espacios disponibles    

    })