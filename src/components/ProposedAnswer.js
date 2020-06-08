import React from 'react'

function ProposedAnswer(props) {

    console.log(props)

    return(
        <div>
            <label>
                <input 
                    type="checkbox" 
                    name="proposedAnswer"
                /> {props.answer}
            </label>
        </div>
    )
}

export default ProposedAnswer