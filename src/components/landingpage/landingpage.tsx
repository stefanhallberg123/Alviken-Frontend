import React, { useState, ChangeEvent } from "react";
import "./landingpage.scss";
import Axios from "axios";
// import DayPickerInput from "react-day-picker";
export default function LandingPage() {
  // const [selectedDate, setSelectedDate] = useState("");
  const [selectedDate ] = useState("");
  const [selectedTime, setSelectedTime] = useState("18");
  const [selectedPeople, setSelectedPeople] = useState("1");

  function checkAvailability() {
    console.log(selectedDate);
    console.log(selectedTime);
    console.log(selectedPeople);

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
