import React, {useState, useEffect} from "react";
import "./GameBoard.scss"
import {Card} from "../Card/Card";

export const GameBoard = ({setPoints, setMoves, figuresArr}) => {

    const [index, setIndex] = useState([])
    const [matchedIndex, setMatchedIndex] = useState([])

    const getID = index => {
        setIndex(prev => [...prev, index])
    }

    useEffect(() => {
        if (index && index.length === 2) {
            setTimeout(() => {
                setIndex([])
            }, )
            if (index[0] &&  index[0] === index[1]) {
                setMatchedIndex(prev => [...prev, index[0]])
                setPoints(prev => prev + 1)
            }
        }
    }, [index])

    return (
        <>
            <div className="game__board">
                {
                    figuresArr && figuresArr.map(figure => <Card card={figure} getID={getID} matchedIndex={matchedIndex} setMove={setMoves} index={index}/>)
                }
            </div>
        </>
    )
}