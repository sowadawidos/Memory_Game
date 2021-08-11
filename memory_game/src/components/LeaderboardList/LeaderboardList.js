import React from "react";

export const LeaderboardList = ({item, id}) => {
    return (
        <>
            <li className="leaderboard__board-list">
                <p className="all lp">
                    {id + 1}
                </p>
                <p className="all username">
                    {item.nickname}
                </p>
                <p className="all moves">
                    {item.moves}
                </p>
                <p className="all time">
                    {item.time}
                </p>
            </li>
        </>
    )
}