var id = document.getElementById("usuario");
var date = document.getElementById("fecha")
var escritorio = document.getElementById("escritorio")
var mensaje = document.getElementById("mensaje")
var type = document.getElementById("type")

function confirmacion() {
    Swal.fire({
  title: `${mensaje.textContent }`,
  type: `${type.textContent}`,
  text: `${date.textContent} ${escritorio.textContent}`,
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: 'green',
  cancelButtonText: 'Volver al inicio',
  confirmButtonText: 'Mis reservas'
}).then((result) => {
  if (!result.value) {
        window.location.href = `/home`
  } else {
    window.location.href = `/booking/${id.textContent}`
  }
})
}