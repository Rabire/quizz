import React, { useState } from 'react'

import './Question.css'

import ProposedAnswer from './ProposedAnswer'

function Question(props) {
    const questionInfos = props.questionInfos
    const [proposedAnswers, setProposedAnswers] = useState([])

    //console.log(questionInfos.answers)

    function verrifyAnswers() {
        console.log("verrify this")
    }

    const answersList = questionInfos.answers.map((answer, index) => 
    <ProposedAnswer
        key={index}
        answer={answer}
        proposedAnswers={proposedAnswers}
        setProposedAnswers={setProposedAnswers}
    />)

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