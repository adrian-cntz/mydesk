var x = document.getElementById("turno");
var id = document.getElementById("usuario");

x.addEventListener('click', (e) => mensaje);

function mensaje() {
    Swal.fire({
    title: '¿Estás seguro que queres borrar la reserva?',
    showCancelButton: true,
    confirmButtonText: 'Si',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.value) {
      window.location.href = `/reserva/borrar/${id.textContent}/${x.textContent}`;
      Swal.fire('Borrado confirmado',
              '',
              'success')
                 }
               })            
}