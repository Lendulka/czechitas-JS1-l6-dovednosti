console.log('funguju!');

let id1 = 'HTML'
let id2 = 'CSS'
let id3 = 'JavaScript'

let input1 = Number(prompt('Zadej svoji úroveň znalosti HTML', 'od 0 do 100'))
let input2 = Number(prompt('Zadej svoji úroveň znalosti CSS', 'od 0 do 100'))
let input3 = Number(prompt('Zadej svoji úroveň znalosti JavaScriptu', 'od 0 do 100'))

const updateSkill = (id, input) => {
    let progressElm = document.querySelector(`#${id} .skill__progress`)
    let valueElm = document.querySelector(`#${id} .skill__value`)
    progressElm.style.width = `${input}%`
    valueElm.textContent = `${input} / 100`
}

updateSkill('skill1', input1)
updateSkill('skill2', input2)
updateSkill('skill3', input3)

/* 2.řešení

const updateSkill = (id, uroven) => {
  const skillElement = document.getElementById(id);
  const progressElement = skillElement.querySelector('.skill__progress');
  const valueElement = skillElement.querySelector('.skill__value');
  valueElement.textContent = `${uroven} / 100`;
  progressElement.style.width = `${uroven}%`;
}

*/
