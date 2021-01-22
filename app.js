//set initial count
let count = 0

// select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach( btn => {
    btn.addEventListener('click', (e) => {
       const styles = e.currentTarget.classList
       if (styles.contains('decrease')) { //contains only applies to DOM nodes, includes for arrays
        count--
       } else if (styles.contains('increase')) {
        count++  
       } else {
        count = 0
       }
       
       //changing colors
       if (count > 0) {
           value.style.color = "green"
       } else
       if (count < 0) {
        value.style.color = "red"   
       } else {
        value.style.color = "black"  
       }

       value.textContent = count
    })
})