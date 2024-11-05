import React from 'react';
import './components/App.css';
import SignUpForm from './components/SignUpForm';
import ImageSection from './components/ImageSection';

function App() {
    return (
        <div className="app-container">
            <SignUpForm />
            <ImageSection />
        </div>
    );
}

export default App;
