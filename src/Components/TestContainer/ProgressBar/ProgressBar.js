import React from 'react'
import PropTypes from 'prop-types'
import getId from 'uniqid'
import './ProgressBar.scss'

function ProgressBar({barLength, selected}) {
    const progressItems = []

    for (let i = 0; i < barLength; ++i) {
        progressItems[i] = {
            id: getId(),
            isActive: (i < selected) ? 'active' : ''
        }
    }

    return (
        <div className="progressBar">
            {
                progressItems.map((i, index) => {
                    const isAnimate = (index === (selected - 1)) ? 'animate' : ''
                    return (
                        <div key={i.id} className="progressBar__item">
                            <div className={`circle ${i.isActive} ${isAnimate}`}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

ProgressBar.propTypes = {
    barLength: PropTypes.number,
    selected: PropTypes.number
}

export default ProgressBar