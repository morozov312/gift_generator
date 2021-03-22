import React from 'react'
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

export default Welcome