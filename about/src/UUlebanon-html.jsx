import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function LebanonHTML() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />

                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    const [showAirplane, setShowAirplane] = useState(false);
    const navigate = useNavigate();



    return (
        <>
            <main>

                <section className="info-section">
                    <h2 className="display-4 display-md-2">Just a UX Developer</h2>
                    <p className="lead fs-5 fs-md-4">Designing Things</p>
                </section>
            </main>


        </>
    );
}

export default LebanonHTML;
