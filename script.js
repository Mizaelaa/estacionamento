document.getElementById("reservaForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    const reserva = {};
    formData.forEach((value, key) => {
      reserva[key] = value;
    });
  
    console.log("Reserva cadastrada:", reserva);
  
    alert("Cadastro realizado com sucesso!");
    this.reset(); // limpa o formulário
  });
  