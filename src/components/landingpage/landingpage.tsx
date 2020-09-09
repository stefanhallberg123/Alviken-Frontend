import React, {useState, ChangeEvent} from 'react';
//import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import "./landingpage.scss";
import Axios from "axios";
// import DayPickerInput from "react-day-picker";
export default function LandingPage(props:any) {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("18");
    const [selectedPeople, setSelectedPeople] = useState("1");

      
    
    function checkAvailability(){
        props.setSelectedDate(selectedDate)
        props.setSelecedtTime(selectedTime)
        props.setSelecedtPeople(selectedPeople)

        // console.log(selectedDate)
        // console.log(selectedTime)
        // console.log(selectedPeople)

        // //+selectedDate+"&time="+selectedTime+"&people="+selectedPeople
        
        // Axios.post('http://localhost:5000/modal', JSON.stringify({
        // date: selectedDate,
        // time: selectedTime,
        // people: selectedPeople })).then(bookings =>{
        // console.log(bookings.data)

        //     bookings.data.map((booking: any)=>{
        //         console.log(booking)
        //     })
        // })
    }
      function handleTimeSelect(e: ChangeEvent<HTMLSelectElement>){
        
            console.log(e.target.value)
           setSelectedTime(e.target.value);
            
    }
    function handlePeopleSelect(e: ChangeEvent<HTMLSelectElement>){
        
        console.log(e.target.value)
        setSelectedPeople(e.target.value);
        
}

function handleDateSelect(day: string){
    
   console.log(day)
    
}

    return (<div>
        <div className="landingpage-body">
            <section className="hero">
                <div className="hero-inner">
                    <div className="greeting">
                    <h1>Alviken</h1>
                    <h2>Välkommen att boka bord hos oss!</h2>
                    </div>
                    <form>
                        <div className="booking">
{ 
                            <div className="day">
                                <input type="date" onChange={(e:any)=>handleDateSelect(e.target.value)}></input>
                                {/* <DayPickerInput onDayClick={(e:any)=>handleDateSelect(new Date(e.getDate()).toISOString())} />  */}
                            </div>  }

                            <div className="time">
                                <select className="select-box" onChange={handleTimeSelect}>
                                    <option value="18">18:00</option>
                                    <option value="21">21:00</option>
                                </select>
                            </div>

                            <div className="people">
                                <select className="select-box" onChange={handlePeopleSelect}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                                <div className="book-button">
                            <button type="button" 
                                onClick={checkAvailability}>
                                Boka
                            </button>
                            </div>
                        </div>
                    </form> 
                    
                </div> 
            </section>
        </div>
    </div>)


}
