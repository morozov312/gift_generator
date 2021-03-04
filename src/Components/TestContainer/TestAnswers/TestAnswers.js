import React, {useContext} from 'react'
import './TestAnswers.scss'
import Context from '../../ResultContext/context'

function Answers({answers, id, clickUpdate}) {

    const resultAnswers = useContext(Context)

    function saveResult(e) {
        clickUpdate()
        resultAnswers.push(e.target.value)
    }

    return (
        <form className="testAnswers">
            {
                answers.map((answer, index) =>
                    <label key={id + answer}>
                        {answer}&nbsp;
                        <input
                            name={`group${index}`}
                            type="radio"
                            value={answer}
                            onClick={(e) => saveResult(e)}
                        />
                    </label>)
            }
        </form>
    )
}

export default Answers