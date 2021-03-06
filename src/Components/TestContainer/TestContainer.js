import React, {useState} from 'react'
import PropTypes from 'prop-types'
import questionsBase from './questionBase.json'
import './TestContainer.scss'
import TestAnswers from './TestAnswers/TestAnswers'
import ProgressBar from './ProgressBar/ProgressBar'

function TestContainer({showResult}) {
    let [current, setCurrent] = useState(0)

    function update() {
        if (current < questionsBase.length - 1) setCurrent(current + 1)
        else showResult()
    }

    return (
        <div className="test">
            <ProgressBar barLength={questionsBase.length} selected={current}/>
            <div className="test__item">
                <p>{questionsBase[current].question}</p>
                <TestAnswers answers={questionsBase[current].answers} clickUpdate={update}/>
            </div>
        </div>
    )
}

TestContainer.propTypes = {
    showResult: PropTypes.func
}

export default TestContainer