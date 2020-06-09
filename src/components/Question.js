import React, { useState, useEffect } from 'react'

import './Question.css'

import MultipleAnswers from './MultipleAnswers'
import BoolAnswers from './BoolAnswers'


function Question(props) {
    const questionInfos = props.questionInfos
    console.log(questionInfos)
    const [proposedAnswers, setProposedAnswers] = useState([])
    const [answersIsTrue, setAnswersIsTrue] = useState(false)

    const [indexOfCorrectAnswer, setIndexOfCorrectAnswer] = useState()


    useEffect( () => {
        if (questionInfos.type === "multiple") {
            setIndexOfCorrectAnswer(questionInfos.answers.indexOf(questionInfos.correctAnswers))
        }
    }, [])

    //const indexOfCorrectAnswer = questionInfos.answers.indexOf(questionInfos.correctAnswers)

    function verrifyAnswers() {
        console.log("verrifyAnswers")
        if(proposedAnswers.includes(indexOfCorrectAnswer) && proposedAnswers.length === 1) {
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
            index={index}
        />)
    }


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
            {
                questionInfos.type === "bool" && 
                <BoolAnswers
                    correctAnswers={questionInfos.correctAnswers}
                />
            }
            <div className="submit-btn" onClick={verrifyAnswers}>
                <b>Vérifier</b>
            </div>
        </div>
    )
}

export default Question