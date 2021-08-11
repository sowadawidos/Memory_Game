import React, {useState} from "react";
import ReactDom from "react-dom";
import "./EndGame.scss"
import {Link} from "react-router-dom"

export const EndGame = ({moves, points, getUser, time}) => {
    const [input, setInput] = useState()

    const handleInput = e => {
        const {name, value} = e.target
        setInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        getUser({
            ...input,
            points: points,
            moves: moves,
            time: time
        })
    }

    return ReactDom.createPortal(
        <>
            <section className="end__game">
                <div className="container">
                    <div className="end__game-box">
                        <h1 className="end__game-title">
                            You won!
                        </h1>
                        <h1 className="end__game-points">
                            Your points : {points}
                        </h1>
                        <h1 className="end__game-time">
                            Your time : "time"
                        </h1>
                        <h1 className="end__game-moves">
                            Your moves : {moves}
                        </h1>
                        <label>
                            Nickname:
                            <input type="text" name="nickname" onChange={handleInput}/>
                        </label>
                        <Link to={'/leaderboard'}>
                            <button className="end__game-btn" onClick={handleSubmit}>
                                Add to leaderboard
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>,
        document.getElementById("portal")
    )
}