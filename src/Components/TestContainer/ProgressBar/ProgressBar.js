import React from 'react'
import PropTypes from 'prop-types'
import getId from 'uniqid'
import './ProgressBar.scss'

function ProgressBar({barLength, selected}) {
    const progressItems = []

    for (let i = 0; i < barLength; ++i) {
        const isActive = (i < selected) ? 'active' : ''
        progressItems.push({
            id: getId(),
            isActive
        })
    }

    return (
        <div className="progressBar">
            {
                progressItems.map(i => <div key={i.id} className="progressBar__item">
                    <div className={`circle ${i.isActive}`}/>
                </div>)
            }
        </div>
    )
}

ProgressBar.propTypes = {
    barLength: PropTypes.number,
    selected: PropTypes.number
}

export default ProgressBar