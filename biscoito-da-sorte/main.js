const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', btnResetClick)

function handleTryClick(event) {
  event.preventDefault()

  let randomFortune = Math.round(Math.random() * 5)

  if (randomFortune == 1) {
      toggleScreen()
      screen2.querySelector('.text').innerText = 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
    } else if (randomFortune == 2) {
      toggleScreen()
      screen2.querySelector('.text').innerText = 'Respire fundo e fique atento às surpresas deliciosas que a vida preparou para você!'
    } else if (randomFortune == 3) {
      toggleScreen()
      screen2.querySelector('.text').innerText = 'Nem todos os dias são bons, mas há algo bom em cada dia.'
    } else if (randomFortune == 4) {
      toggleScreen()
      screen2.querySelector('.text').innerText = 'Respeite sua mente e trate seu corpo com carinho.'
    } else if (randomFortune == 5) {   
      toggleScreen()
      screen2.querySelector('.text').innerText = 'Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada, apenas dê o primeiro passo.'
  }
}

function btnResetClick() {
  toggleScreen()
  randomFortune = Math.round(Math.random() * 5)
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide')
}