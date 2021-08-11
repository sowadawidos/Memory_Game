import React, {useState, useEffect} from "react";
import './Card.scss'

export const Card = ({card, getID, matchedIndex, setMove, index}) => {
    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(true)

        getID(card.id)

        setMove(prev => prev + 1)
    }
    useEffect(() => {
        if (index[1]) {
            setTimeout(() => {
                setActive(false)
            }, 1000)
        }
    }, [index])

    return (
        <>
            <div className="card">
                {
                    active || matchedIndex.includes(card.id) ?
                        <div className="card-front">
                            {card.figure}
                        </div>
                        :
                        <div className="card-back" onClick={handleActive}>
                            ?
                        </div>
                }
            </div>
        </>
    )
}