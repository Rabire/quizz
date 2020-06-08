import React, { useState } from 'react'

import './Question.css'


function Question(props) {
    const questionInfos = props.questionInfos
    const [proposedAnswers, setProposedAnswers] = useState([])
    const [answersIsTrue, setAnswersIsTrue] = useState(false)

    const indexOfCorrectAnswer = questionInfos.answers.indexOf(questionInfos.correctAnswers)

    function verrifyAnswers() {
        console.log("verrifyAnswers")
        if(proposedAnswers.includes(indexOfCorrectAnswer) && proposedAnswers.length === 1) {
            setAnswersIsTrue(true)
        } else {
            setAnswersIsTrue(false)
        }
    }

    //console.log(proposedAnswers)

    function toggleCheckAnswer(answerIndex) {
        if (proposedAnswers.includes(answerIndex)) {
            setProposedAnswers(proposedAnswers.filter((proposedAnswer) => (proposedAnswer !== answerIndex))) //remove value from proposedAnswers Array
        } else {
            setProposedAnswers([...proposedAnswers, answerIndex]) //push answerIndex in proposedAnswers Array
        }
    }

    const answersList = questionInfos.answers.map((answer, index) => 
    <div
        key={index}
        className="answer"
        onClick={() => toggleCheckAnswer(index)}
    >
        {
            proposedAnswers.includes(index) &&
            <span>[X] </span>
        }
        {answer}
    </div>)

    return(
        <div className="question">
            <h3>
                {questionInfos.question}
                {
                    answersIsTrue &&
                    <span className="red"> Good Job</span>
                }
            </h3>
            {
                questionInfos.type === "multiple" && 
                answersList
            }
            <div className="submit-btn" onClick={verrifyAnswers}>
                Vérifier
            </div>
        </div>
    )
}

export default Question