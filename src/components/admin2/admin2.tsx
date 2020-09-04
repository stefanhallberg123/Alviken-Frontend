import React, { useEffect } from 'react';
import axios from 'axios';

export default function FetchMovies() {

        axios.get('http://localhost:5000/admin').then(
            res => {
                console.log(res.data)
            })
    return(
    <div>

    </div>
    )
}
