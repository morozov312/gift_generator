import React, {useState} from 'react'
import {WELCOME, TEST, RESULT} from './constants'
import Context from './ResultContext/context'
import './App.scss'
import bigGift from '../Assets/images/big_gift.png'
import smallGifts from '../Assets/images/smal_gifts.svg'
import cutGift from '../Assets/images/cut_gift.svg'
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
                return <Welcome showTest={() => setState(TEST)}/>
            case TEST:
                return <TestContainer showResult={() => setState(RESULT)}/>
            case RESULT:
                return <Result showWelcome={() => setState(WELCOME)} resultsArr={resultAnswers}/>
        }
    }

    const isHidden = (visible === RESULT) ? 'hiddenImg' : ''

    return (
        <Context.Provider value={resultAnswers}>
            <img src={bigGift} alt="big gift" className={"giftImg giftImg-big " + isHidden}/>
            <img src={cutGift} alt="cut gift logo" className={"giftImg giftImg-cut " + isHidden}/>
            <img src={smallGifts} alt="small gifts" className={"giftImg giftImg-small " + isHidden}/>
            <main className="content">
                {renderItem(visible, setVisible)}
            </main>
        </Context.Provider>
    )
}

export default App
