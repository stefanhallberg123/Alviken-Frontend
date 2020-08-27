import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './navbar.scss';

export default function NavBar() {
    
    return(
    <BrowserRouter>
        <div>
            <nav>
                <ul id="nav">
                    <li id="menu"><Link to="/">Logga ut</Link></li>
                    <li id="menu"><Link to="/">Inställningar</Link></li>
                    <li id="menu"><Link to="/">Bokningar</Link></li>
                </ul>
            </nav>
        </div>
    </BrowserRouter>
)};
