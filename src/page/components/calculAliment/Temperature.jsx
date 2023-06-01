import React from "react";


function Temperature() {
    let temperature = 0;

    function temperatureEau(t) {
        temperature = parseInt(t.target.value);
        return temperature;

    }
    return (

        <>
            <div className="température">
                <button className="temp" onClick={temperatureEau} value='20'>20</button>
                <button className="temp" onClick={temperatureEau} value='21'>21</button>
                <button className="temp" onClick={temperatureEau} value='22'>22</button>
                <button className="temp" onClick={temperatureEau} value='23'>23</button>
                <button className="temp" onClick={temperatureEau} value='24'>24</button>
                <button className="temp" onClick={temperatureEau} value='25'>25</button>
                <button className="temp" onClick={temperatureEau} value='26'>26</button>
                <button className="temp" onClick={temperatureEau} value='27'>27</button>

            </div>
        </>
    )
}

export default Temperature;