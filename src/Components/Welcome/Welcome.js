import React from 'react'
import './Welcome.scss'

function Welcome({showTest}) {
    return (
        <div className="welcome">
            <h1 className="welcome__title">Lorem ipsum dolor sit amet</h1>
            <p className="welcome__description">
                Consectetur adipisicing elit. Amet culpa dicta laudantium minus nisi repellendus sint voluptatum? <br/>
                Adipisci asperiores aspernatur delectus, ducimus expedita libero molestiae obcaecati, officiis qui <br/>
                quisquam repellendus! <br/>
                Consectetur adipisicing elit. Amet culpa dicta laudantium minus nisi repellendus sint voluptatum? <br/>
                Adipisci asperiores aspernatur delectus, ducimus expedita libero molestiae obcaecati, officiis qui <br/>
                quisquam repellendus! <br/>
            </p>
            <button className="welcome__btn" onClick={() => showTest()}>Start</button>
        </div>
    )
}

export default Welcome