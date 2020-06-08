import React from 'react'

import './App.css'

import QuestionsData from './datas/QuestionsData.json';

import Question from './components/Question'

function App() {

    console.log(QuestionsData)

    return (
        <div className="app">
            <h1>Mon QUIZZ</h1>
        </div>
    )
}

export default App
