import React, {useState} from 'react'
import TestItem from './TestItem/TestItem'
import ProgressBar from './ProgressBar/ProgressBar'

const questionsBase = [
    {
        question: 'Lorem ipsum ?',
        answers: ['a', 'b', 'c']
    },
    {
        question: 'Lorem ipsum ? \n Lorem ipsum ?',
        answers: ['d', 'e', 'i']
    },
    {
        question: 'Lorem ipsum ?',
        answers: ['f', 'g', 'h']
    },
    {
        question: 'Lorem ipsum ? \n Lorem ipsum ?',
        answers: ['i', 's', 'f']
    },
    {
        question: 'Lorem ipsum ?',
        answers: ['ff', 'gg', 'ce']
    },
]

function TestContainer() {
    let [current, setCurrent] = useState(0)

    function inc() {
        if (current < questionsBase.length - 1) setCurrent(current + 1)
    }

    return (
        <div>
            <ProgressBar count={questionsBase.length} cur={current}/>
            <TestItem
                question={questionsBase[current].question}
                answers={questionsBase[current].answers}
                click={inc}
            />
        </div>
    )
}

export default TestContainer