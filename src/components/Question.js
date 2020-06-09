import React, { useState, useEffect } from 'react'

import './Question.css'

import MultipleAnswers from './MultipleAnswers'
import BoolAnswers from './BoolAnswers'


function Question(props) {
    const questionInfos = props.questionInfos
    //console.log(questionInfos)
    const [proposedAnswers, setProposedAnswers] = useState([])
    //console.log(proposedAnswers)
    const [answersIsTrue, setAnswersIsTrue] = useState(false)

    const [indexOfCorrectAnswer, setIndexOfCorrectAnswer] = useState()
    const [AnswerIsFalse, setAnswerIsFalse] = useState(false)


    useEffect( () => {
        if (questionInfos.type === "multiple") {
            setIndexOfCorrectAnswer(questionInfos.answers.indexOf(questionInfos.correctAnswers))
        }
    }, [])

    //const indexOfCorrectAnswer = questionInfos.answers.indexOf(questionInfos.correctAnswers)

    function falseAnswer() {
        setAnswersIsTrue(false)
        setAnswerIsFalse(true)
    }

    function rightAnswer() {
        setAnswersIsTrue(true)
        setAnswerIsFalse(false)
    }

    function verrifyAnswers() {
        //console.log("verification...")
        if(questionInfos.type === "multiple") {
            if(proposedAnswers.includes(indexOfCorrectAnswer) && proposedAnswers.length === 1) {
                rightAnswer()
            } else {
                falseAnswer()
            }
        } else if (questionInfos.type === "bool") {
            if(proposedAnswers === questionInfos.correctAnswers) {
                rightAnswer()
            } else {
                falseAnswer()
            }
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
                {
                    AnswerIsFalse &&
                    <span className="red"> You're BAD !</span>
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