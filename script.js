document.getElementById("reservaForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const reserva = {};
  formData.forEach((value, key) => {
    reserva[key] = value;
  });

  // Salvar no localStorage
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  reservas.push(reserva);
  localStorage.setItem("reservas", JSON.stringify(reservas));

  console.log("Reserva cadastrada:", reserva);

  alert("Cadastro realizado com sucesso!");
  this.reset(); // limpa o formulário
});
