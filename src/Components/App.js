import React, {useState} from 'react'
import './App.scss'
import {WELCOME, TEST, RESULT} from './constants'
import Context from './ResultContext/context'
import Welcome from './Welcome/Welcome'
import TestContainer from './TestContainer/TestContainer'
import Result from './Result/Result'

const resultAnswers = []

function App() {
    let [visible, setVisible] = useState(WELCOME)

    function renderItem(state, setState) {
        switch (state) {
            default:
            case WELCOME:
                return <Welcome showTest={setState.bind(null, TEST)}/>
            case TEST:
                return <TestContainer showResult={setState.bind(null, RESULT)}/>
            case RESULT:
                return <Result showWelcome={setState.bind(null, WELCOME)} resultsArr={resultAnswers}/>
        }
    }

    return (
        <Context.Provider value={resultAnswers}>
            <main className="content">
                {renderItem(visible, setVisible)}
            </main>
        </Context.Provider>
    )
}

export default App
