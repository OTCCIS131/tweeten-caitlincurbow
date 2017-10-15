$(function(){
    // $('.glyphicon glyphicon-heart').click(({target}) => {
    //     console.log(target)
    //     let currentCount = $(target).children('div')[0]
    //     console.log(currentCount)
    // })

    $("#newTweetForm").submit(function (e) {
        e.preventDefault()
        let newTweetInput = $("[tweet=title]", $(this))
        let newTweet = newTweetInput.val()

        if (newTweet.trim() == '') return
        
        let storeTweet = $("li:last-child". $("#tweetList")).clone()

        storeTweet.text(newTweet)
        
        $("#tweetList").clone().appendTo(storeTweet)
        addDeleteButton(storeTweet)
        newTweetInput.val('')
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