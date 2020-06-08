import React, { useState } from 'react'

import './Question.css'


function Question(props) {
    const questionInfos = props.questionInfos
    const [proposedAnswers, setProposedAnswers] = useState([])

    //console.log(questionInfos.answers)

    function verrifyAnswers() {
        console.log("verrify this")
    }

    console.log(proposedAnswers)

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
            <h3>{questionInfos.question}</h3>
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