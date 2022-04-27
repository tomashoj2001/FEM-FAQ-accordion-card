const d = document,
    blocks = [...d.querySelectorAll('.question-answer')],
    questions = d.querySelectorAll('.info__question'),
    arrows = d.querySelectorAll('.info__arrow'),
    answers = d.querySelectorAll('.info__answer');

let count = 0,
    keepGoing = true,
    index;

function toggleAnswer() {
    if (count === 0) {
        index = this.dataset.index;
        displayAnswer(index);
    }

    if (count > 0) {
        if (index === this.dataset.index) {
            displayAnswer(index);
            keepGoing = false;
        }
        else {            
            if (!keepGoing) {
                keepGoing = true;
                displayAnswer(this.dataset.index);
            }    
            else {
                displayAnswer(index);
                displayAnswer(this.dataset.index);
            }
        }
        index = this.dataset.index;
    }    
    count += 1;
}

function displayAnswer(i) {
    questions[i].classList.toggle('active');
    arrows[i].classList.toggle('active');
    answers[i].classList.toggle('active');
}

questions.forEach(question => question.addEventListener('click', toggleAnswer));
arrows.forEach(arrow => arrow.addEventListener('click', toggleAnswer));
