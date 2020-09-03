import React, { useState, ChangeEvent } from "react";
import "./landingpage.scss";
import Axios from "axios";
import Reactmodal from "react-modal";

export default function LandingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("18");
  const [selectedPeople, setSelectedPeople] = useState("1");

  function checkAvailability() {
    console.log(selectedDate);
    console.log(selectedTime);
    console.log(selectedPeople);

<<<<<<< HEAD
        Axios.get("http://localhost:5000/?date="+selectedDate+"&time="+selectedTime+"&people="+selectedPeople).then(response => response.data()).then(bookings =>{
            console.log(bookings)
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
        
    console.log("handled")
    console.log(day)
    setSelectedDate(day.replace("T10:00:00.000Z", ""))

}





    return (<div>
        <div className="landingpage-body">
            <section className="hero">
                <div className="hero-inner">
                    <h1>Alviken</h1>
                    <h2>Välkommen att boka bord hos oss!</h2>
                    <form>
                        <div className="booking">

                            <div className="day">
                                <DayPickerInput onDayChange={day => {
                                handleDateSelect(day.toISOString());
                                // setSelectedDate(day.toLocaleDateString());
                                }}/> 
                            </div> 

                            <div className="time">
                                <select onChange={handleTimeSelect}>
                                    <option value="18">18:00</option>
                                    <option value="21">21:00</option>
                                </select>
                            </div>
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
>>>>>>> dc71dbc7488daa8a60b40ba47027c877a818240f

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
                  {/* <DayPickerInput */}
                  onDayChange=
                  {(day: any) => {
                    console.log(day.toLocaleDateString());
                    setSelectedDate(day.toLocaleDateString());
                  }}
                  {/* /> */}
                </div>

                <div className="time">
                  <select onChange={handleTimeSelect}>
                    <option value="18">18:00</option>
                    <option value="21">21:00</option>
                  </select>
                </div>

                <div className="people">
                  <select onChange={handlePeopleSelect}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>

                <button type="button" onClick={checkAvailability}>
                  Boka
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
