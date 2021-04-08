import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './Result.scss'
import data from './resultAnswers.json'

function Result({showWelcome, resultsArr}) {

    const giftsArr = []

    resultsArr.forEach((i, index) => {
        const giftsCount = data[index][i].length
        const randomGiftIndex = Math.floor(Math.random() * giftsCount)
        giftsArr.push(data[index][i][randomGiftIndex])
    })

    useEffect(() => {
        return () => {
            resultsArr.length = 0
        }
    }, [resultsArr]);


    return (
        <div className="result">
            {giftsArr.map(i =>
                <div key={i.filename}>
                    <h3 className="result__title">{i.title}</h3>
                    <LazyLoadImage
                        src={`${process.env.PUBLIC_URL}/images/${i.filename}`}
                        alt={i.title}
                        className="result__img"
                        effect="blur"
                    />
                </div>
            )}
            <button className="result__btn" onClick={() => showWelcome()}>Пройти тест снова</button>
        </div>
    )
}

Result.propTypes = {
    showWelcome: PropTypes.func,
    resultsArr: PropTypes.arrayOf(PropTypes.string)
}

export default Result