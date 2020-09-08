import React, {useState, ChangeEvent} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import "./landingpage.scss";
<<<<<<< HEAD
import Axios from 'axios';
import { runInThisContext } from 'vm';

=======
import Axios from "axios";
import DayPickerInput from "react-day-picker";
>>>>>>> 5bd7b8755672fa1f24bcfaae74aec677b08f3504
export default function LandingPage() {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("18");
    const [selectedPeople, setSelectedPeople] = useState("1");

      
    
    function checkAvailability(){
        console.log(selectedDate)
        console.log(selectedTime)
        console.log(selectedPeople)

//+selectedDate+"&time="+selectedTime+"&people="+selectedPeople
        
        Axios.get("http://localhost:5000/").then(bookings =>{
            console.log(bookings.data)

<<<<<<< HEAD
            bookings.data.map((booking: any)=>{
                console.log(booking)
            })
        })
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
    
    setSelectedDate(day.replace("T10:00:00.000Z", ""))
    
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

                            <div className="day">
                                <DayPickerInput onDayChange={day => {
                                handleDateSelect(day.toISOString());
                                // setSelectedDate(day.toLocaleDateString());
                                }}/> 
                            </div> 

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
=======
    Axios.get(
      "http://localhost:5000/?date=" +
        selectedDate +
        "&time=" +
        selectedTime +
        "&people=" +
        selectedPeople
    )
      .then((response) => response.data())
      .then((bookings) => {
        console.log(bookings);
      });
  }
  function handleTimeSelect(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    setSelectedTime(e.target.value);
  }
  function handlePeopleSelect(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    setSelectedPeople(e.target.value);
  }

  return (
    <div>
      <div className="landingpage-body">
        <section className="hero">
          <div className="hero-inner">
            <h1>Alviken</h1>
            <h2>Välkommen att boka bord hos oss!</h2>
            <form>
              <div className="booking">
                <div className="day">
                  {/* <DayPickerInput
                    onDayChange={(day: any) => {
                      console.log(day.toLocaleDateString());
                      setSelectedDate(day.toLocaleDateString());
                    }}
                  /> */}
                </div>

                <div className="time">
                  <select onChange={handleTimeSelect}>
                    <option value="18">18:00</option>
                    <option value="21">21:00</option>
                  </select>
                </div>
>>>>>>> 5bd7b8755672fa1f24bcfaae74aec677b08f3504


}
