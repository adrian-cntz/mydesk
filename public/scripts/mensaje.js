var x = document.getElementById("borrar");

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
      window.location.href = `/reserva/borrar/usuario_id/id_turno`;
      Swal.fire('Borrado confirmado',
              '',
              'success')
                 } 
               })            
}