export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");
  function animaNumeros() {
    numeros.forEach((num) => {
      const total = +num.innerText;
      const incremento = total / 100;
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        num.innerText = Math.floor(start);
        if (start > total) {
          num.innerText = total;
          clearInterval(timer);
        }
      }, 10);
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const observeTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observeTarget, { attributes: true });
}
