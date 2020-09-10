import React, { useState } from "react";
import "react-day-picker/lib/style.css";
import "./landingpage.scss";
import Modal from "./modal/Modal/Modal";
interface ISendData {
  setAllData(allData: any): void;
}

export default function LandingPage(props: ISendData) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("18:00");
  const [selectedPeople, setSelectedPeople] = useState("1");
  const [openModal, setOpenModal] = useState(false);

  let defaultValue = {
    date: "",
    time: "",
    people: "",
  };
  const [allData, setAllData] = useState({ defaultValue });

  const handleData = (e: any) => {
    setAllData({ ...allData, [e.target.name]: e.target.value });
  };
  console.log(allData);

  const checkAvailability = (e: any) => {
    setAllData(allData);
    setOpenModal(true);
  };

  return (
    <div>
      <div className="landingpage-body">
        <section className="hero">
          <div className="hero-inner">
            <div className="greeting">
              <h1>Alviken</h1>
              <h2>Välkommen att boka bord hos oss!</h2>
            </div>
            {openModal ? (
              <Modal
                date={selectedDate}
                time={selectedTime}
                people={selectedPeople}
              ></Modal>
            ) : (
              <form>
                <div className="booking">
                  {
                    <div className="day">
                      <input
                        type="date"
                        name="date"
                        onChange={handleData}
                        required
                      ></input>
                      {/* <DayPickerInput onDayClick={(e:any)=>handleDateSelect(new Date(e.getDate()).toISOString())} />  */}
                    </div>
                  }

                  <div className="time">
                    <select
                      className="select-box"
                      required
                      name="time"
                      onChange={handleData}
                    >
                      <option value="18:00">18:00</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>

                  <div className="people">
                    <select
                      className="select-box"
                      required
                      name="people"
                      onChange={handleData}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div className="book-button">
                    <button
                      type="button"
                      disabled={!allData}
                      onClick={checkAvailability}
                    >
                      Boka
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
