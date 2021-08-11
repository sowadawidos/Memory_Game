import React, {useState, useEffect} from "react";
import "./GamePage.scss"
import {GameBoard} from "../GameBoard/GameBoard";
import {Header} from "../Header/Header";
import {EndGame} from "../EndGame/EndGame";

export const GamePage = ({getUser}) => {
    const figures = [
        {
            figure: "😇",
            id: 1
        },
        {
            figure: "😡",
            id: 2
        },
        {
            figure: "🤡",
            id: 3
        },
        {
            figure: "👻",
            id: 4
        },
        {
            figure: "🐵",
            id: 5
        },
        {
            figure: "🐹",
            id: 6
        },
        {
            figure: "🐯",
            id: 7
        },
        {
            figure: "🦧",
            id: 8
        },
        {
            figure: "🐍",
            id: 9
        }]

    const [points, setPoints] = useState(0)
    const [moves, setMoves] = useState(0)
    const [blur, setBlur] = useState(false);
    const [time, setTime] = useState(50)

    // useEffect(() => {
    //     const interval =
    //         time > 0 && setInterval(() => {
    //         setTime(prev => prev - 1)
    //         return () => clearInterval(interval)
    //     }, 1000)
    // }, [time])

    const figuresArr = figures.concat(figures)
        // .sort(() => Math.random() - 0.5)

    useEffect(() => {
        if (points === 9) {
            setBlur(true)
        }
    }, [points])

    return (
        <>
            <Header/>
            <section className="game__page" style={blur ? {filter: "blur(4px)"} : {}}>
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
                blur && <EndGame points={points} moves={moves} getUser={getUser} time={time}/>
            }
        </>
    )
}