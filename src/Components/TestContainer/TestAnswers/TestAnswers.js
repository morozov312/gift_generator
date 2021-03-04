import React, {useContext} from 'react'
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
                    <label key={answer.value}>
                        {answer.text}&nbsp;
                        <input
                            name={`group${index}`}
                            type="radio"
                            value={answer.value}
                            onClick={(e) => saveResult(e)}
                        />
                    </label>)
            }
        </form>
    )
}

export default Answers