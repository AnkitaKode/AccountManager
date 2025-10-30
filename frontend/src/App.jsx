import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ParticleBackground from './components/ParticleBackground';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import RiskResults from './pages/RiskResults';
import Settings from './pages/Settings';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
    return (
        <>
            <ParticleBackground />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    
                    {/* Protected Routes */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/scan-results" element={<RiskResults />} />
                    </Route>
                </Routes>
            </main>
        </>
    );
}

export default App;