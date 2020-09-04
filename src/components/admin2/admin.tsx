import React from 'react';
// import React, { useEffect, useState} from 'react';
// import React, { useEffect} from 'react';

// import {Link} from 'react-router-dom';
// import axios from 'axios';
// import { IBookedValue } from './Create2';

    // const [bookings, setBooking] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     comment: '',
    //     date: '',
    //     timeslot: '',
    //     qty: '0',
    //     gdpr: false,
    // });

    // const [times] = useState ([
    //     '18:00',
    //     '21:00'
    // ]);

    // const [bookingError, setBookingError] = useState(false);


    export default function admin() {


        // Hämta bokningar för att visa det i en lista.
            // Se Alla värden i en lista
        // Kunna klicka ändra på bokningen
            // Komma till edit sidan
        // Kunna klicka radera på bokningarna och då tas det bort ifrån sidan och databasen.



    // function deleteBooking(id: number) {
    //     axios.delete(`http://localhost:5000/admin/${id}`)
    //     .then(res => {
    //         console.log(res.data);
    //     });
    // }

    // function getBookings() {
        // axios.get('http://localhost:5000/admin/')
        // .then(res => {
        //     console.log(res.data)
        // })

    // }

    // useEffect(() => {
    //     axios.get('http://localhost:5000/admin/')
    //         .then(setBooking => {
    //             console.log(setBooking.data)
    //         })
    // }, []);

    return(
    <div>
        <ul></ul>
    </div>
    )
}


// const [count, setCount] = useState(0) //number
// const [username, setUsername] = useState('') //string
// const [isOpen, setIsOpen] = useState(false) //boolean
// const [form, setValues] = useState({ //object
//     id: 0,
//     first: '',
//     last: '',
//     password: '',
//     subscribe: false
//    })
// const [items, setItems] = useState([]) // array


// interface IBookedValue {
//     showValue(booking: IBookedValue): void;
// }

// function Home(props: IBookedValue ) {
//     const [booking, setItems] = useState([]);


// }

//     const deleteCustomer(id: number) {
//     useEffect(() => {
//         axios.delete(`http://localhost:5000/admin/${id}`).then(data => {
//             const index = booking.findIndex(customer => customer._id === id);
//             this.state.booking.splice(index, 1);
//             this.props.history.push('/');')
//     })
// }


//     const [, setUserValue] = useState({})
//     const updateValue = (bookedUser: IBookedValue) => {
//         setUserValue({ bookedUser });
//         console.log(bookedUser);

//         axios.get("http://localhost:5000/admin", bookedUser).then((response) => {
//             console.log(response.data)
//     }






//     const componentDidMount(): void {
//         axios.get("http://localhost:5000/admin").then(response => {
//             console.log(response.data);
//             .setState({ booking: response.data });
//         })
//     }
//     const deleteCustomer(id: number) {
//         axios.delete(`http://localhost:5000/admin/${id}`).then(data => {
//             const indebooking.findIndex(customer => customer._id === id);booking.splice(index, 1);
//             .props.history.push('/');
//         })
//     }

//         booking.map(customer => {
//             return (
//             <tr key={customer._id}>
//                 <td>{customer.user.name}</td>
//                 <td>{customer.user.email} - {customer.user.phone}</td>
//                 <td>{customer.comment}</td>
//                 <td>{customer.date}</td>
//                 <td>{customer.timeslot}</td>
//                 <td>{customer.qty}</td>
//                 <td>
//                     <div className="d-flex justify-content-between align-items-center">
//                         <div className="btn-group" style={{marginBottom:"20px"}}>
//                             <Link to={`/admin/edit/${customer._id}`} className="btn btn-sm btn-outline-secondary">Edit</Link>
//                             <button className="btn btn-sm btn-outline-secondary" onClick={()=>deleteCustomer(customer.id)}>Delete</button>
//                         </div>
//                     </div>
//                 </td>
//             </tr>);
//         });

//         console.log(trs);
//         return (
//             <div>
//                 {booking.length === 0 && (
//                     <div className="text-center">
//                         <h2>Inga bokningar kan visas för tillfället</h2>
//                     </div>
//                 )}
//                 <div className="container">
//                     <div className="row">
//                         <table className="table table-bordered">
//                             <thead className="thead-light">
//                                 <tr>
//                                     <th scope="col">Namn</th>
//                                     <th scope="col">Kontakt</th>
//                                     <th scope="col">Kommentar</th>
//                                     <th scope="col">Datum</th>
//                                     <th scope="col">Tid</th>
//                                     <th scope="col">Antal</th>
//                                     <th scope="col">Ändra</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {trs}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }



// import React, { useState } from 'react';
// import axios from 'axios';
// import { IBookedValue } from './Create2';

// export default function Home() {

//     const [, setUserValue] = useState({})
//     const updateValue = (bookedUser: IBookedValue) => {
//         setUserValue({ bookedUser });
//         console.log(bookedUser);

//         axios.get("http://localhost:5000/admin", bookedUser).then((response) => {
//             console.log(response.data)
//         });
//     }

//     return(<div>

//     </div>
//     )
// }

