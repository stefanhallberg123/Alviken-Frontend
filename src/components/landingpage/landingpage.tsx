import React, { useState } from "react";
import "./landingpage.scss";
import Axios from "axios";
import Reactmodal from "react-modal";

export default function LandingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState(null);
  // modal
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

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
    setIsOpen(true);
  }

  return (
    <div>
      <div className="landingpage-body">
        <section className="hero">
          <div className="hero-inner">
            <h1>Alviken</h1>
            <h2>Välkommen att boka bord hos oss!</h2>
            <div className="booking">
              <div className="day">
                {/* <DayPickerInput onDayChange={day => { */}
                console.log(day.toLocaleDateString())
                setSelectedDate(day.toLocaleDateString());
                {/* }}/>  */}
              </div>
              <div className="time">
                <form>
                  <div>
                    <label>
                      <input type="radio" value="18" checked={true} />
                      18:00
                    </label>
                    <label>
                      <input type="radio" value="21" />
                      21:00
                    </label>
                  </div>

                  <button type="button" onClick={checkAvailability}>
                    Boka
                  </button>
                </form>
              </div>
              <div className="people">lorem ipsum</div>
              <div className="bookbutton"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
