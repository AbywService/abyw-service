
function openPayment(item) {
  document.getElementById('paymentPopup').classList.remove('hidden');
  document.getElementById('cardInfo').innerHTML = '';
  window.selectedItem = item;
}

function selectMethod(method) {
  let card = '';
  if (method === 'HUMO') card = '9860 1766 2085 4073';
  if (method === 'UZCARD') card = '5614 6849 0241 9280';
  if (method === 'VISA') card = '4023 0601 4258 5032';
  document.getElementById('cardInfo').innerHTML = `<p><b>${method}</b>: ${card}</p>`;
}

function confirmPayment() {
  let timer = 30;
  const timerDiv = document.getElementById('timer');
  timerDiv.classList.remove('hidden');
  const interval = setInterval(() => {
    timerDiv.innerText = 'Ожидание подтверждения: ' + timer + ' сек';
    timer--;
    if (timer < 0) {
      clearInterval(interval);
      window.location.href = 'https://t.me/xaa702';
    }
  }, 1000);
}

document.getElementById('menuToggle').onclick = () => {
  const menu = document.getElementById('sideMenu');
  menu.classList.toggle('hidden');
};
