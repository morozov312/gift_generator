import React from 'react'
import './TestItem.scss'

function TestItem({question, answers, click}) {
    return (
        <div className="testItem">
            <pre>{question}</pre>
            <form className="testItem__form">
                {
                    answers.map(answer => <label key={answer}>{answer}<input name="group" type="radio" value="answer"
                                                                             onClick={() => click()}/></label>)
                }
            </form>
        </div>
    )
}

export default TestItem