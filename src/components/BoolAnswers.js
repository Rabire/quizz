import React from 'react'

function BoolAnswers(props) {

    function toggleCheckAnswer(answerIndex) {
        if (props.proposedAnswers.includes(answerIndex)) {
            props.setProposedAnswers(props.proposedAnswers.filter((proposedAnswer) => (proposedAnswer !== answerIndex))) //remove value from proposedAnswers Array
        } else {
            props.setProposedAnswers([...props.proposedAnswers, answerIndex]) //push answerIndex in proposedAnswers Array
        }
    }

    return(
        <div>
            <div className="answer">
                Vrai
            </div>
            <div className="answer">
                Faux
            </div>
        </div>
    )
}



export default BoolAnswers