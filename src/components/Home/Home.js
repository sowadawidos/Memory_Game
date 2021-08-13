import React from "react";
import "./Home.scss"
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <section className="home">
                <div className="container">
                    <div className="home__box">
                        <h1 className="home__box-title">
                            MEMORY GAME
                        </h1>
                        <Link to={"/game-board"}>
                            <button className="home__box-button">
                                Play
                            </button>
                        </Link>
                        <Link to={"/leaderboard"}>
                            <button className="home__box-button">
                                Leaderboard
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}