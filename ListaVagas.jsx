export default function ListaVagas() {
  const vagas = [
    { placa: "ABC1234", nome: "João", vaga: "12" },
    { placa: "XYZ5678", nome: "Maria", vaga: "34" }
  ];

  return (
    <ul>
      {vagas.map((vaga, index) => (
        <li key={index}>
          {vaga.nome} - Placa: {vaga.placa} - Vaga: {vaga.vaga}
        </li>
      ))}
    </ul>
  );
}