import React from 'react'
import PropTypes from 'prop-types'
import './Welcome.scss'
import mainImg from './main.png'

function Welcome({showTest}) {
    return (
        <div className="welcome">
            <div>
                <img src={mainImg} alt="main" className="welcome__img"/>
            </div>
            <div className="welcome__btn-container">
                <button className="welcome__btn" onClick={() => showTest()}>Пройти тест</button>
            </div>
        </div>
    )
}

Welcome.propTypes = {
    showTest: PropTypes.func
}

export default Welcome