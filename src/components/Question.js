import React, { useState } from 'react'

import './Question.css'

import MultipleAnswers from './MultipleAnswers'
import BoolAnswers from './BoolAnswers'


function Question(props) {
    const questionInfos = props.questionInfos

    const [proposedAnswers, setProposedAnswers] = useState([])
    const [answersIsTrue, setAnswersIsTrue] = useState()

    function verrifyAnswers() {
        console.log("verification...")
        if(proposedAnswers === questionInfos.correctAnswers) {
            setAnswersIsTrue(true)
        } else {
            setAnswersIsTrue(false)
        }
    }

    let multipleAnswersList
    if (questionInfos.type === "multiple") {
        multipleAnswersList = questionInfos.answers.map((answer, index) =>
        <MultipleAnswers
            key={index}
            proposedAnswers={proposedAnswers}
            setProposedAnswers={setProposedAnswers}
            answer={answer}
        />)
    }


    return(
        <div className="question">
            <h3>
                {questionInfos.question}
                {
                    answersIsTrue &&
                    <span className="red"> Good Job !</span>
                }
                {
                    answersIsTrue === false &&
                    <span className="red"> Try again !</span>
                }
            </h3>
            {
                questionInfos.type === "multiple" && 
                multipleAnswersList
            }
            {
                questionInfos.type === "bool" && 
                <BoolAnswers
                    proposedAnswers={proposedAnswers}
                    setProposedAnswers={setProposedAnswers}
                />
            }
            <div className="submit-btn" onClick={verrifyAnswers}>
                <b>Vérifier</b>
            </div>
        </div>
    )
}

export default Question