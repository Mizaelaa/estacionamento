import { useState } from "react";

export default function FormReserva() {
  const [form, setForm] = useState({
    placa: "",
    nome: "",
    apartamento: "",
    bloco: "",
    modelo: "",
    cor: "",
    vaga: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    alert("Cadastro realizado com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit}>
      {["placa", "nome", "apartamento", "bloco", "modelo", "cor", "vaga"].map((field) => (
        <div key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
          <input type="text" name={field} value={form[field]} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Salvar</button>
    </form>
  );
}