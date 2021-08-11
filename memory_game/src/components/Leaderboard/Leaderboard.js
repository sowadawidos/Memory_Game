import React, {useState, useEffect} from "react";
import {Header} from "../Header/Header";
import "./Leaderboard.scss"
import {LeaderboardList} from "../LeaderboardList/LeaderboardList";

export const Leaderboard = ({leaderboard}) => {
    const [filteredLeaderboard, setFilteredLeaderboard] = useState()

    useEffect(() => {
        const sorted = leaderboard && leaderboard.sort((a, b) => {
            if (a.time === b.time) {
                    return a.moves - b.moves
            } else {
                return a.time - b.time
            }
        })
        setFilteredLeaderboard(sorted)
    }, [leaderboard])

    return (
        <>
            <Header/>
            <section className="leaderboard">
                <div className="container">
                    <div className="leaderboard__box">
                        <h1 className="leaderboard__title">
                            Leaderboard
                        </h1>
                        <ul className="leaderboard__board">
                            <li className="leaderboard__board-list">
                                <p className="title lp">
                                    LP.
                                </p>
                                <p className="title username">
                                    Nickname
                                </p>
                                <p className="title moves">
                                    Moves
                                </p>
                                <p className="title time">
                                    Time left
                                </p>
                            </li>
                            {
                                filteredLeaderboard && filteredLeaderboard.map((element, key) => <LeaderboardList item={element} id={key}/>)
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}