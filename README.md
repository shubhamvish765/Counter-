#It is basic Layout for javaScript learner

It is counter Program when user enter any number in input box then click on plus(+) btn so increment/decrement 
Suppose user enter 10 number in input box and click on plus icon then will be incremented by +10 and click on minus(-) icon
so will be decremented by -10
Using mainly querySelector, event Listner and parseInt etc.

const count = document.querySelector('.count')
const plusBtn = document.querySelector('.plus-btn')
const minusBtn = document.querySelector('.minus-btn')
const numInput = document.querySelector('.numInput')
const reset = document.querySelector('.reset')

plusBtn.addEventListener('click',()=>{
  const inputValue = parseInt(numInput.value)
  const countValue = parseInt(count.innerText)
  count.innerText = countValue + inputValue
})

minusBtn.addEventListener('click',()=>{
  const inputValue = parseInt(numInput.value)
  const countValue = parseInt(count.innerText)
  count.innerText = countValue -inputValue 
})

reset.addEventListener('click',()=>{
  count.innerText = 0
})
