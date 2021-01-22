//set initial count
let count = 0

// select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach( btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.classList)
    })
})
