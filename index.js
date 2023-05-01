let Heading = document.getElementById('heading-text')

let btn = document.getElementById('btn')

let points = 0
// console.log(Num)

// Heading.innerText = ''
let Num = Math.floor(Math.random() * 100)
let input = document.getElementById('input-text').value

btn.addEventListener('click', () => {
  console.log(input)
  GameLogic()
})

document.addEventListener('keypress', (e) => {
  console.log(input)

  console.log(e.key)
  if (e.key == 'Enter') {
    GameLogic()
  }
})

function GameLogic() {
  let input = document.getElementById('input-text').value

  if (Num == input) {
    Heading.innerText =
      'Congratulations you have guessed the correct number.\n' +
      'The number was ' +
      Num
    score.innerText = `Score-You Guessed the Number in ${points} Tries`
  } else if (Num > input) {
    Heading.innerText = 'Try guessing higher Number'
    points++
    console.log(points)
  } else if (Num < input) {
    Heading.innerText = 'Try guessing lower Number'
    points++
    console.log(points)
  }
}

console.log(Num)
let restart = document.getElementById('restart')
restart.addEventListener('click', function () {
  location.reload()
})
