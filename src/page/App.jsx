import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Aliment from './components/calculAliment/Aliment';


function App() {
    return (

        <>
            <div>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/aliment' element={<Aliment />} />
                </Routes>

            </div>

        </>
    )
}

export default App;