import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import './TestAnswers.scss'
import Context from '../../ResultContext/context'

function Answers({answers, clickUpdate}) {
    const resultAnswers = useContext(Context)

    function saveResult(e) {
        clickUpdate()
        resultAnswers.push(e.target.value)
    }

    return (
        <form className="testAnswers">
            {
                answers.map((answer, index) =>
                    <label key={answer.value} className="testAnswers__answer">
                        <input
                            name={`group${index}`}
                            type="radio"
                            value={answer.value}
                            onClick={(e) => saveResult(e)}
                        />
                        &nbsp;{answer.text}
                    </label>)
            }
        </form>
    )
}

Answers.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.object),
    clickUpdate: PropTypes.func
}

export default Answers