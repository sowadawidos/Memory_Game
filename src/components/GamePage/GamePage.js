import React, {useState, useEffect} from "react";
import "./GamePage.scss"
import {GameBoard} from "../GameBoard/GameBoard";
import {Header} from "../Header/Header";
import {EndGame} from "../EndGame/EndGame";

export const GamePage = ({getUser, figuresArr}) => {
    const [points, setPoints] = useState(0)
    const [moves, setMoves] = useState(0)
    const [blur, setBlur] = useState(false);
    const [blurLose, setBlurLose] = useState(false);
    const [time, setTime] = useState(50)


    useEffect(() => {
        const interval =
            time > 0 && setInterval(() => {
                setTime(prev => prev - 1)
            }, 1000)
        if (time === 0 || points === 9) {
            clearInterval(interval)
            setBlurLose(true)
        }
        return () => clearInterval(interval)
    }, [time])

    useEffect(() => {
        if (points === 9) {
            setBlur(true)
        }
    }, [points])

    return (
        <>
            <Header/>
            <section className="game__page" style={blur || blurLose? {filter: "blur(4px)"} : {}}>
                <div className="container">
                    <div className="game__page-info">
                        <h1 className="game__page-time">
                            Time: {time} seconds
                        </h1>
                        <h1 className="game__page-points">
                            Score: {points} points
                        </h1>
                        <h1 className="game__page-points">
                            Moves: {moves} moves
                        </h1>
                    </div>
                    <GameBoard setPoints={setPoints} setMoves={setMoves} figuresArr={figuresArr}/>
                </div>
            </section>
            {
                blur && <EndGame points={points} moves={moves} getUser={getUser} time={time} text={"You won!"} blur={blur} blurLose={blurLose}/>
            }
            {
                blurLose && <EndGame points={points} moves={moves} getUser={getUser} time={time} text={"Time's up!"} blurLose={blurLose} blur={blur}/>
            }
        </>
    )
}