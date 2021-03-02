import React from 'react'
import getId from 'uniqid'
import './ProgressBar.scss'

function ProgressBar({count, cur}) {
    const progress = []
    for (let i = 0; i < count; i++) {
        let val = (i === cur) ? '^' : '>'
        progress.push(
            {
                value: val,
                id: getId()
            }
        )
    }
    return (
        <div className="progressBar">
            {progress.map(i => <div key={i.id}>{i.value}</div>)}
        </div>
    )
}

export default ProgressBar