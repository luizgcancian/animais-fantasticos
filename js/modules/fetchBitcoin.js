export default function initFetchBitcoin() {}
const btcPriceSpan = document.querySelector(".btc-price");
function fetchBitcoin() {
  const myF = fetch("https://blockchain.info/ticker");
  myF
    .then((r) => {
      return r.json();
    })
    .then((btcJSON) => {
      let btcDonation = 100 / btcJSON.BRL.last;
      btcPriceSpan.innerText = btcDonation.toFixed(5);
    });
}

fetchBitcoin();
