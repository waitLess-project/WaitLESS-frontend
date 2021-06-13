import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


const LandingPage = () => {
    return (
        <div className="landingPage">
            <div>
                <button className="waitless-big logo-button">
                    <img className="logo" src={"./waitless.png"} />
                </button>
            </div>
            <div className="landingPage-options">
                <button className="landingPage-btn " >
                    Rewards
                </button>
                <Link to="/menu">
                    <button className="landingPage-btn " style={{"cursor": "pointer"}}>
                    Get Started
                    </button>                
                </Link>
            </div>
        </div>
    )
}

export default LandingPage
