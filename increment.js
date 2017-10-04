$(function(){
    $('.glyphicon glyphicon-heart').click(({target}) => {
        console.log(target)
        let currentCount = $(target).children('div')[0]
        console.log(currentCount)
    })
})

// let buttons = document.getElementsByClassName("increment")
// buttons = Array.from(buttons)
// buttons.forEach(button =>{
//     button.addEventListener("click", e =>{
//         let currentCount = button.nextSibling.textContent//.trim
//         newCount = parseInt(currentCount) + 1
//         button.nextSibling.textContent = newCount
//     })
// })