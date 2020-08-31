import React from 'react';
import NavBar from '../admin/navbar/navbar';
import Result from '../admin/result/result';
import './booking.scss';


export default function Booking() {
    
    return(<div>
    <NavBar></NavBar>

    <p id="header">Bokningar</p>

        <Result></Result>
    </div>
    )
    }
