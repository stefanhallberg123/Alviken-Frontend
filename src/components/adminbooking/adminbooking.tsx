import React from 'react';
import './adminbooking.scss';
import edit from '../../assets/edit.svg';

export default function AdminBooking() {
    
    return(<div>
                <nav>
                    <ul id="nav">
                        <li id="menu"><a href="http://randomurl.com">Bokningar</a></li>
                        <li id="menu"><a href="http://randomurl.com">Inställningar</a></li>
                        <li id="menu"><a href="http://randomurl.com">Logga ut</a></li>
                    </ul>
                </nav>

    <h1>DAGENS DATUM</h1>
    
    <table>
    <tr>
        <th><h3>ORDER NO</h3></th>
        <th><h3>DATUM</h3></th>
        <th><h3>NAMN</h3></th>
        <th><h3>KONTAKT</h3></th>
        <th><h3>ANTAL</h3></th>
        <th><h3>TID/SITTNING</h3></th>
        <th><h3>ÄNDRA</h3></th>
    </tr>
    <tr>
        <td><p>#8787250</p></td>
        <td><p>2020-10-21</p></td>
        <td><p>Alfreds Futterkiste</p></td>
        <td><p>073 437 32 32</p></td>
        <td><p>5</p></td>
        <td><p>21.00</p></td>
        <td><a href="http://randomlink.com"><img src={edit} alt="edit" id="smallimg" /></a></td>

    </tr>
    <tr>
        <td><p>#8787251</p></td>
        <td><p>2020-10-21</p></td>
        <td><p>Francisco Chang</p></td>
        <td><p>073 437 32 32</p></td>
        <td><p>5</p></td>
        <td><p>18.00</p></td>
        <td><a href="http://randomlink.com"><img src={edit} alt="edit" id="smallimg" /></a></td>
    </tr>
    <tr>
        <td><p>#8787252</p></td>
        <td><p>2020-10-21</p></td>
        <td><p>Anna Svensson</p></td>
        <td><p>073 437 32 32</p></td>
        <td><p>5</p></td>
        <td><p>18.00</p></td>
        <td><a href="http://randomlink.com"><img src={edit} alt="edit" id="smallimg" /></a></td>
    </tr>
    </table>
    
    </div>)
}