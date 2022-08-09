export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horariosSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaSemana = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const diasDaSemana = [1, 2, 3, 4, 5];

  const horarioAberto =
    horarioAgora >= horariosSemana[0] && horarioAgora <= horariosSemana[1];

  const diaAberto = diasDaSemana.indexOf(diaSemana) !== -1;

  if (diaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
