import React from 'react'

function MultipleAnswers(props) {

    function toggleCheckAnswer(answerIndex) {
        if (props.proposedAnswers.includes(answerIndex)) {
            props.setProposedAnswers(props.proposedAnswers.filter((proposedAnswer) => (proposedAnswer !== answerIndex))) //remove value from proposedAnswers Array
        } else {
            props.setProposedAnswers([...props.proposedAnswers, answerIndex]) //push answerIndex in proposedAnswers Array
        }
    }

    return(
        <div
            className="answer"
            onClick={() => toggleCheckAnswer(props.index)}
        >
            {
                props.proposedAnswers.includes(props.index) &&
                <span>[X] </span>
            }
            {props.answer}
        </div>
    )
}



export default MultipleAnswers