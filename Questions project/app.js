//using selectors inside the element
// traversing the dom

// MY TRY

// const plusBtn = document.querySelector(".plus-icon");
// const minusBtn = document.querySelector(".minus-icon");
// const questionsText = document.querySelector(".question");

// plusBtn.addEventListener("click", function(){
//     questionsText.classList.toggle("show-text");
// })
// minusBtn.addEventListener("click", function(){
//     questionsText.classList.toggle("show-text");
// })

const btns = document.querySelectorAll(".question-btn");
const questionText = document.querySelectorAll(".question-text");

btns.forEach(function(btn){
    btn.addEventListener("click", function (e) {
        // const question = e.currentTarget.parentElement.parentElement
        // question.classList.toggle('show-text'); 
        // questionText.classList.add("question-textt") 
        questionText.forEach(function(quest){
            const 
            quest.classList.add("question-textt");
        })
    });
});