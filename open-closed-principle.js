/*
    The second principle in SOLID is called 'Open-Closed' principle. This means that objects, functions or modules should
    only be extended and not modified in order to add new features. In order to add functionality to the system, the 
    source code should not be altered but only extended by the new classes, objects, functions or other entities 
    that require a specific functionality being added to the parent or base entity.

    In this example, we can see that printQuiz() acts us the base entity with the responsibility of printing the questions
    and doesn't care what type of questions since the intrinsic behavior of different type of questions are responsibility
    and being handled by the classes such as 'BooleanQuestion', 'MultipleChoiceQuestion', 'TextQuestion' and 'RangeQuestion'.
    
    By doing this, whenever we want to add a new type of question, we can simply create a new class and not modify the printQuiz()
    function. Hence, we prevent the breaking our base code from happening. prinQuiz() behavior will not change since it is the
    job of classes acting us extensions to print quiz what to do with the types of question.

    Hence we can say that printQuiz() is 'closed for modification' but 'open' for extension through classes.
*/


function printQuiz(questions) {
    questions.forEach(question => {
        console.log(`${question.description}?`)
        question.printQuestionChoices();
        console.log('')
    })
}

class BooleanQuestion {
    constructor(description) {
        this.description = description;
    }
    printQuestionChoices() {
        console.log('1. True');
        console.log('2. False');
    }
}

class MultipleChoiceQuestion {
    constructor(description, choices) {
        this.description = description;
        this.choices = choices;
    }
    printQuestionChoices() {
        this.choices.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`)
        })
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description;
    }
    printQuestionChoices() {
        console.log("Answer:_______________");
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description;
    }
    printQuestionChoices() {
        console.log("Min:______________");
        console.log("Max:_______________");
    }

}

const questions = [ 
    new BooleanQuestion("Did you kill him"),
    new MultipleChoiceQuestion("Who killed Haytham", ["Ezio", "Connor", "Altair"]),
    new TextQuestion("Who defeated Al-Mualim"),
    new RangeQuestion("What is the peed range in your city"),
]

printQuiz(questions);