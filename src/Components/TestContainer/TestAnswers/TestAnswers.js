import React from 'react'
import './TestAnswers.scss'


function Answers({answers, id, clickUpdate}) {
    return (
        <form className="testAnswers">
            {
                answers.map((answer, index) =>
                    <label key={id + answer}>
                        {answer}&nbsp;
                        <input
                            name={`group${index}`}
                            type="radio"
                            value="answer"
                            onClick={() => clickUpdate()}
                        />
                    </label>)
            }
        </form>
    )
}

export default Answers