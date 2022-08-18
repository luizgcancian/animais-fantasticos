import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  const numerosGrid = document.querySelector(".numeros-grid");
  async function fetchAnimais(url) {
    fetch(url)
      .then((r) => {
        return r.json();
      })
      .then((animaisJSON) => {
        animaisJSON.forEach((animal) => {
          const divAnimal = createAnimal(animal);
          numerosGrid.appendChild(divAnimal);
        });
        initAnimaNumeros();
      });
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais("/animaisapi.json");
}
