import React from "react";
import "../home/Home.css";

function Home() {
    return (
        <>
            <div className="body">
                <header>
                    <div >
                        <button className="btnLeft btn">LOGO</button>
                    </div>
                    <div >
                        <div className="divBtnCenter">
                            <button className="btnCenter btn">Work</button>
                            <button className="btnCenter btn">Distraction</button>
                            <button className="btnCenter btn">Contact</button>
                        </div>
                        
                    </div>
                    <div >
                        <button className="btnRight btn">MENU</button>
                    </div>
                </header>
            </div>

        </>
    )
}

export default Home;