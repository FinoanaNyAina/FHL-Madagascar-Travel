import React from "react";

function Aliment() {
    // Number of fish
    let number = 0;
    let mesureAliment = 0;

    // VARIABLE POID MOYENNE
    let poidMoyenne = 0;
    let PoidI = 0;
    let PoidII = 0;
    let PoidIII = 0;
    let PoidIV = 0;

    // VARIABLE TEMPERATURE
    let temperature = 0;

    //Function number of fish
    function nombre(n) {
        number = parseInt(n.target.value);
        return number;
    }
    //FUNCTION poid moyenne 
    function Poid1(e) {
        let resultat = parseInt(e.target.value);
        PoidI = resultat;
        return PoidI;
    }

    function Poid2(e) {
        let resultat = parseInt(e.target.value);
        PoidII = resultat;
        return PoidII;
    }

    function Poid3(e) {
        let resultat = parseInt(e.target.value);
        PoidIII = resultat;
        return PoidIII;
    }

    function Poid4(e) {
        let resultat = parseInt(e.target.value);
        PoidIV = resultat;
        return PoidIV;
    }

    function CalculPoidMoyenne() {
        let calcul = ((PoidI + PoidII + PoidIII + PoidIV) / 4);
        poidMoyenne = calcul;
        console.log(poidMoyenne);
        return poidMoyenne;
    }

    //Function temperature 
    function temperatureEau(t) {
        temperature = parseInt(t.target.value);
        console.log(temperature);
        return temperature;

    }

    // Function Condition temperateure 

    function finalCalcul() {
        if (resultat >= 100 && resultat < 150 && temperature === 20) {
            mesureAliment = 0.8;
        } if (resultat >= 100 && resultat <= 150 && temperature === 21) {
            mesureAliment = 0.9;
        } if (resultat >= 100 && resultat <= 150 && temperature === 22) {
            mesureAliment = 1.1;
        } if (resultat >= 100 && resultat <= 150 && temperature === 23) {
            mesureAliment = 1.2;
        } if (resultat >= 100 && resultat <= 150 && temperature === 24) {
            mesureAliment = 1.6;
        } if (resultat >= 100 && resultat <= 150 && temperature === 25) {
            mesureAliment = 1.8;
        } if (resultat >= 100 && resultat <= 150 && temperature === 26) {
            mesureAliment = 2.1;
        } if (resultat >= 100 && resultat <= 150 && temperature === 27) {
            mesureAliment = 2.4;
        }

        //PM 150 - 200 gramme 

        if (resultat >= 150 && resultat < 200 && temperature === 20) {
            mesureAliment = 0.8;
        } if (resultat >= 150 && resultat <= 200 && temperature === 21) {
            mesureAliment = 0.9;
        } if (resultat >= 150 && resultat <= 200 && temperature === 22) {
            mesureAliment = 1.0;
        } if (resultat >= 150 && resultat <= 200 && temperature === 23) {
            mesureAliment = 1.2;
        } if (resultat >= 150 && resultat <= 200 && temperature === 24) {
            mesureAliment = 1.3;
        } if (resultat >= 150 && resultat <= 200 && temperature === 25) {
            mesureAliment = 1.5;
        } if (resultat >= 150 && resultat <= 200 && temperature === 26) {
            mesureAliment = 1.7;
        } if (resultat >= 150 && resultat <= 200 && temperature === 27) {
            mesureAliment = 1.9;
        }

        // PM 200 - 300 

        if (resultat >= 200 && temperature === 20) {
            mesureAliment = 0.7;
        } if (resultat >= 200 && resultat <= 300 && temperature === 21) {
            mesureAliment = 0.8;
        } if (resultat >= 200 && resultat <= 300 && temperature === 22) {
            mesureAliment = 0.9;
        } if (resultat >= 200 && resultat <= 300 && temperature === 23) {
            mesureAliment = 1.0;
        } if (resultat >= 200 && resultat <= 300 && temperature === 24) {
            mesureAliment = 1.2;
        } if (resultat >= 200 && resultat <= 300 && temperature === 25) {
            mesureAliment = 1.4;
        } if (resultat >= 200 && resultat <= 300 && temperature === 26) {
            mesureAliment = 1.5;
        } if (resultat >= 200 && resultat <= 300 && temperature === 27) {
            mesureAliment = 1.7;
        }

        else {
            reponseTexte = "vous aves entrer un poids non recommander";
        }
    }



    return (
        <>
            <div>
                <h1>Calcul de votre Alimentation de poisson</h1>

                <h2>Entrer votre nombre total de votre poisson</h2>
                <div>
                    <label htmlFor="number">nombre total poisson</label>
                    <input type="number" name="tatalPoisson" id="totalPoisson" onChange={nombre} />
                </div>
                <h2>Entrer les poids</h2>
                <form action="">
                    <input type="number" name="" id="" onChange={Poid1} />
                    <input type="number" name="" id="" onChange={Poid2} />
                    <input type="number" name="" id="" onChange={Poid3} />
                    <input type="number" name="" id="" onChange={Poid4} />
                    <input type="button" value="suivant" onClick={CalculPoidMoyenne} />
                </form>

            </div>

            <h2>choisir votre temperature de votre eaux</h2>

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

export default Aliment;