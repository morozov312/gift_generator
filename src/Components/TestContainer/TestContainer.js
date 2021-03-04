import React, {useState} from 'react'
import questionsBase from './questionBase'
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
        <div>
            <ProgressBar count={questionsBase.length} selected={current}/>
            <div className="testItem">
                <pre>{questionsBase[current].question}</pre>
                <TestAnswers
                    answers={questionsBase[current].answers}
                    id={questionsBase[current].id}
                    clickUpdate={update}
                />
            </div>
        </div>
    )
}

export default TestContainer