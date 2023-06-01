import React from "react";
import { Link } from "react-router-dom";
import "../home/Home.css";

function Home() {
    return (
        <>
            <div className="contents">

                <div className="btn">
                    <h1>Bienvenue sur cette application</h1>

                    <Link to='/aliment' className="link">
                        <button className="btnProvande"> Commencer &#128512; </button>
                    </Link>

                </div>

                <div className="routeur">

                </div>
            </div>

        </>
    )
}

export default Home;