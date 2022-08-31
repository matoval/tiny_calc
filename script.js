const allButtons = document.querySelectorAll('button')
const screen = document.querySelector('.calculator-screen')

const addAllParams = e => {
  changeScreen(screen.value, e.target.value)
}

const handleEvent = (acc, cur) => {
  if (cur === ""){
    return""
  }
  if (cur === "=") {
    return eval(acc)
  }
  return acc += cur
}

const changeScreen = (acc, cur) => screen.value = handleEvent(acc, cur)

allButtons.forEach(btn => btn.addEventListener('click', addAllParams))
