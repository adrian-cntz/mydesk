const eliminarLinks = document.querySelectorAll(".eliminar");
eliminarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const idTurno = link.dataset.id;
    const idUsuario = link.dataset.usuario;
    mensaje(idTurno, idUsuario);
  });
});

function mensaje(idTurno, idUsuario) {
  Swal.fire({
    title: "¿Estás seguro que queres borrar la reserva?",
    showCancelButton: true,
    confirmButtonText: "Si",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.value) {
      var fila = document.getElementById("fila_" + idTurno);
      fila.parentNode.removeChild(fila);
      fetch(`/booking/delete/${idUsuario}/${idTurno}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al eliminar la reserva");
          }
          return response.json();
        })
        .then((data) => {
          Swal.fire("Borrado confirmado", data.message, "success");
        })
        .catch((error) => {
          Swal.fire("Error al eliminar la reserva", error.message, "error");
        });
    }
  });
}