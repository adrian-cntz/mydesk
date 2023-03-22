function formatearFecha(fecha) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return fecha.toLocaleDateString("es-ES", options);
}

function buscarUsuario(rowsU, usuarioId) {
  return rowsU.find((usuario) => usuario.id_usuario === usuarioId);
}

function crearFilaConsulta(filaConsulta, rowsU) {
  const nuevaF = formatearFecha(filaConsulta.fecha);
  const newRowU = buscarUsuario(rowsU, filaConsulta.usuario_id);
  const nuevaFila = `
    <tr class="overflow">
      <td style="min-width: 70px;" scope="col">${filaConsulta.id_contacto}</td>
      <td style="min-width: 200px;" scope="col">${nuevaF}</td>
      <td style="min-width: 170px;" scope="col">${newRowU.nombre}</td>
      <td style="min-width: 170px;" scope="col">${newRowU.mail}</td>
      <td style="min-width: 300px;" scope="col">${filaConsulta.mensaje}</td>
    </tr>
  `;
  return nuevaFila;
}

document.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.querySelector("#lista-turnos tbody");

  try {
    const [responseC, responseU] = await Promise.all([
      fetch("/contact/list"),
      fetch("/user/all"),
    ]);
    const responseText = await responseC.text();
console.log(responseText);
const rowsC = JSON.parse(responseText);

   /*  const [rowsC, rowsU] = await Promise.all([
      responseC.json(),
      responseU.json(),
    ]); */
    const filas = rowsC
      .map((filaConsulta) => crearFilaConsulta(filaConsulta, rowsU))
      .join("");
    tbody.innerHTML = filas;
  } catch (error) {
    console.log(error);
  }
});
