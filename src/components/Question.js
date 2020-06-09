import React, { useState } from 'react'

import './Question.css'

import MultipleAnswers from './MultipleAnswers'


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


    const multipleAnswersList = questionInfos.answers.map((answer, index) =>
        <MultipleAnswers
            key={index}
            proposedAnswers={proposedAnswers}
            setProposedAnswers={setProposedAnswers}
            answer={answer}
            index={index}
        />)

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
                multipleAnswersList
            }
            <div className="submit-btn" onClick={verrifyAnswers}>
                Vérifier
            </div>
        </div>
    )
}

export default Question