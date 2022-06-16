
//Select elements from the DOM
const questions = document.querySelectorAll('.question')


//Loop Throught all the elements and add event listener to them
questions.forEach((question) => 
    question.addEventListener
('click', () => {
    if(question.parentNode.classList.contains('active')) {
        question.parentNode.classList.toggle('active');
    }
    else {
        questions.forEach((question) => question.parentNode.classList.remove('active'))
        question.parentNode.classList.add('active');
        
    }
}))