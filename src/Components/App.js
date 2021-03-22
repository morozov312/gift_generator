import React, {useState} from 'react'
import './App.scss'

import {WELCOME, TEST, RESULT} from './constants'
import Context from './ResultContext/context'
import Welcome from './Welcome/Welcome'
import TestContainer from './TestContainer/TestContainer'
import Result from './Result/Result'
import bigGift from '../Assets/images/big_gift.png'
import smallGifts from '../Assets/images/smal_gifts.svg'
import cutGift from '../Assets/images/cut_gift.svg'

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
            <img src={bigGift} alt="big gift" className="giftImg giftImg-big"/>
            <img src={cutGift} alt="cut gift logo" className="giftImg giftImg-cut"/>
            <main className="content">
                {renderItem(visible, setVisible)}
            </main>
            <img src={smallGifts} alt="small gifts" className="giftImg giftImg-small"/>
        </Context.Provider>
    )
}

export default App
