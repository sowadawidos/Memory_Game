import React, {useState, useEffect} from "react";

export const EndGameTitle = ({text}) => {
    return (
        <>
            <h1 className="end__game-title">
                {text}
            </h1>
        </>
    )
}