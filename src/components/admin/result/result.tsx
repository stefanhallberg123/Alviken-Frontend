import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import edit from '../../../assets/edit.svg';
import remove from '../../../assets/remove.svg';

export default function Result() {

return(<BrowserRouter><div>
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
        <td>
            <Link to="/"><img src={edit} alt="edit" id="smallimg" /></Link>
            <Link to="/"><img src={remove} alt="remove" id="smallimg" /></Link>
        </td>
    </tr>
    <tr>
        <td><p>#8787251</p></td>
        <td><p>2020-10-21</p></td>
        <td><p>Francisco Chang</p></td>
        <td><p>073 437 32 32</p></td>
        <td><p>5</p></td>
        <td><p>18.00</p></td>
        <td>
            <Link to="/"><img src={edit} alt="edit" id="smallimg" /></Link>
            <Link to="/"><img src={remove} alt="remove" id="smallimg" /></Link>
        </td>
    </tr>
    <tr>
        <td><p>#8787252</p></td>
        <td><p>2020-10-21</p></td>
        <td><p>Anna Svensson</p></td>
        <td><p>073 437 32 32</p></td>
        <td><p>5</p></td>
        <td><p>18.00</p></td>
        <td>
            <Link to="/"><img src={edit} alt="edit" id="smallimg" /></Link>
            <Link to="/"><img src={remove} alt="remove" id="smallimg" /></Link>
        </td>
    </tr>
    </table>
    
    </div></BrowserRouter>
    )};