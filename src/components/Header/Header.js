import React from "react";
import './Header.scss'
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="header__logo">
                        Memory <span>Game</span>
                    </div>
                    <Link to={"/"}>
                        <button className="exit__game">
                            Back to menu
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}