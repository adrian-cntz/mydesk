var x = document.getElementById("lista-turnos");
var id = document.getElementById("usuario");

x.addEventListener("click", (e) => mensaje);

function mensaje() {
  Swal.fire({
    title: "¿Estás seguro que queres borrar la reserva?",
    showCancelButton: true,
    confirmButtonText: "Si",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.value) {
      window.location.href = `/booking/delete/${id.textContent}/${x.textContent}`;
      Swal.fire("Borrado confirmado", "", "success");
    }
  });
}
