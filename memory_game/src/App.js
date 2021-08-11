import './App.scss';
import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./scss/main.scss"
import {Home} from "./components/Home/Home";
import {GamePage} from "./components/GamePage/GamePage";
import {db} from "./API/API"
import {Leaderboard} from "./components/Leaderboard/Leaderboard";

function App() {
    const [leaderboard, setLeaderboard] = useState()

    const getUser = user => {
        if (db) {
            db.collection("leaderboard").add({
                ...user
            })
                .catch(error => {
                    console.error(error)
                })
        }
    }
    
    useEffect(() => {
        if (db) {
            db.collection('leaderboard').onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data()
                }))
                setLeaderboard(data)
            })
        }
    }, [db])

    return (
        <div className="page">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/game-board">
                        <GamePage getUser={getUser}/>
                    </Route>
                    <Route path="/leaderboard">
                        <Leaderboard leaderboard={leaderboard}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
