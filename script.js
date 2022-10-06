const allButtons = document.querySelectorAll('button')
const screen = document.querySelector('.calculator-screen')

const addAllParams = e => {
  changeScreen(screen.value, e.target.value)
}

const isAllowedChar = (char) => {
  const allowedChar = ['+','-','*','/','','=','0','1','2','3','4','5','6','7','8','9']
  return [...char].every(c => allowedChar.includes(c))
}

const handleEvent = (acc, cur) => {
  if (acc && !isAllowedChar(acc)) {
    return ""
  }
  if (cur === "" || !acc && cur === "="){
    return""
  }
  if (cur === "=") {
    return eval(acc)
  }
  return acc += cur
}

const changeScreen = (acc, cur) => screen.value = handleEvent(acc, cur)

allButtons.forEach(btn => btn.addEventListener('click', addAllParams))

