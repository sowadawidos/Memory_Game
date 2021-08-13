import React, {useState} from "react";
import ReactDom from "react-dom";
import "./EndGame.scss"
import {Link} from "react-router-dom"
import {EndGameTitle} from "../EndGameTitle/EndGameTitle"

export const EndGame = ({moves, points, getUser, time, text, blur, blurLose}) => {
    const [input, setInput] = useState()
    const [select, setSelected] = useState(false)

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
        setSelected(true)
    }

    return ReactDom.createPortal(
        <>
            <section className="end__game">
                <div className="container">
                    <div className="end__game-box">
                        <EndGameTitle text={text}/>
                        <h1 className="end__game-points">
                            Your points : {points}
                        </h1>
                        <h1 className="end__game-time">
                            Your time : {time}
                        </h1>
                        <h1 className="end__game-moves">
                            Your moves : {moves}
                        </h1>
                        {
                            blur &&
                                <>
                                    <label>
                                        Nickname:
                                        <input type="text" name="nickname" onChange={handleInput}/>
                                    </label>
                                    <Link to={"/leaderboard"}>
                                        <button className="end__game-btn" disabled={select} onClick={handleSubmit}>
                                            {
                                                select ? "Added to leaderboard" : "Add to leaderboard"
                                            }
                                        </button>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </section>
        </>,
        document.getElementById("portal")
    )
}