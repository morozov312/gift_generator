import React, {useEffect} from 'react'
import data from './resultAnswers.json'

function Result({showWelcome, resultsArr}) {

    const a = resultsArr.reduce((prev, curr) => prev[curr], data)

    useEffect(() => {
        return () => {
            resultsArr.length = 0
        }
    }, [resultsArr]);

    return (
        <div>
            <h2 className="potom">Lorem ipsum dolor sit amet</h2>
            <pre>
                Some text Some text Some text Some text <br/>
                Some text Some text Some text Some text <br/>
                Some text Some text Some text Some text <br/>
            </pre>
            <h3>{a.title}</h3>
            <pre>{a.description}</pre>
            <img src={`${process.env.PUBLIC_URL}/images/${a.name}`} alt={a.title}/>
            <button onClick={() => showWelcome()}>GO HOME</button>
        </div>
    )
}

export default Result