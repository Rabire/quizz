import React from 'react'

import './App.css'

import QuestionsData from './datas/QuestionsData.json';

import Question from './components/Question'

function App() {

    //console.log(QuestionsData)


    return (
        <div className="app">
            <h1>Mon QUIZZ</h1>
            {
                QuestionsData.questions.map(
                    question =>
                    <Question
                        key={question.id}
                        questionInfos={question}
                    />
                )
            }
        </div>
    )
}

export default App
