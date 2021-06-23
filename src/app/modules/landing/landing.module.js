import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './landing.style.css'

import {BasicButton} from '../../shared/components/basic-button/basic-button';
import {ImageButton} from '../../shared/components/image-button/image-button';

export default class LandingPage extends Component {
    
    render() {
        return (
            <div className="landingPage">
                <div>
                    <ImageButton 
                    buttonClassName='waitless-big logo-button'
                    imageClassName='logo'
                    imageSource={"./waitless.png"}></ImageButton>
                </div>
                <div className="landingPage-options">
                    <BasicButton basicButtonText='Rewards' className='landingPage-btn'></BasicButton>
                    <Link to="/menu">
                        <BasicButton basicButtonText='Get Started' className='landingPage-btn'></BasicButton>            
                    </Link>
                </div>
            </div>           
        )
    }
}