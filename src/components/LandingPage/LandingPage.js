import React from 'react'
import './styles.css'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <div>
                <button className="waitless-big">
                    WaitLESS
                </button>
            </div>
            <div className="landingPage-options">
                <button className="landingPage-btn">
                    Rewards
                </button>
                <button className="landingPage-btn">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default LandingPage
