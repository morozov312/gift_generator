import React from 'react'
import PropTypes from 'prop-types'
import getId from 'uniqid'
import './ProgressBar.scss'

function ProgressBar({barLength, selected}) {
    const progressItems = []

    for (let i = 0; i < barLength; i++) {
        progressItems.push(
            {
                value: (i === selected) ? '^' : '>',
                id: getId()
            }
        )
    }

    return (
        <div className="progressBar">
            {
                progressItems.map(i => <div key={i.id}>{i.value}</div>)
            }
        </div>
    )
}

ProgressBar.propTypes = {
    barLength: PropTypes.number,
    selected: PropTypes.number
}

export default ProgressBar