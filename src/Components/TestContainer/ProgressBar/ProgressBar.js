import React from 'react'
import getId from 'uniqid'
import './ProgressBar.scss'

function ProgressBar({count, selected}) {
    const progressItems = []

    for (let i = 0; i < count; i++) {
        progressItems.push(
            {
                value: (i === selected) ? '^' : '>',
                id: getId()
            }
        )
    }

    return (
        <div className="progressBar">
            {progressItems.map(i => <div key={i.id}>{i.value}</div>)}
        </div>
    )
}

export default ProgressBar