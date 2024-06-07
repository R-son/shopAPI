import React from 'react';
import scam from '../res/Scammed.gif';
import '../styles/Scammed.css';

export default function Scammed() {
    return (
        <div className="scammed-container">
            <img src={scam} alt="Judgment" className="scammed-image" />
            <h1 className="scammed-title">CONGRATS</h1>
            <h3 className="scammed-text">You've successfully been scammed!</h3>
            <h3>(Seriously you're not seeing that money again)</h3>
        </div>
    );
}