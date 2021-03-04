import React, {useEffect} from 'react'

function Result({showWelcome, resultsArr}) {

    useEffect(() => {
        return function () {
            resultsArr.length = 0
        }
    }, [resultsArr])

    return (
        <div>
            <button onClick={() => showWelcome()}>GO HOME</button>
        </div>
    )
}

export default Result