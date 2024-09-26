
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