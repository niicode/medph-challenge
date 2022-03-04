import React, { useState } from "react";
import axios from "axios";
import "./consul.css";

function ConsultantForm() {
  const [button, setButton] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const complaintHandler = (e) => {
    setComplaint(e.target.value);
  };

  const newActionHandler = (e) => {
    e.preventDefault();
    setButton("new");
  };

  const viewActionHandler = (e) => {
    e.preventDefault();
    setButton("view");
  };

  let payload = {
    patientFirstName: firstName,
    patientLastName: lastName,
    email: email,
    complaint: complaint,
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/new-consult", { payload }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="consul">
      <div>
        <a href="" onClick={newActionHandler}>
          Add New Patient
        </a>
        <a href="#" onClick={viewActionHandler}>
          View All Consultations
        </a>
      </div>
      <div className="consul__form">
        {button === "new" ? (
          <div>
            <form onSubmit={handleSubmit}>
              <h2>Consultant Form</h2>
              <div className="inputs">
                <input
                  className="consul__input"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={firstNameHandler}
                  required
                />
                <input
                  className="consul__input"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={lastNameHandler}
                  required
                />
                <input
                  className="consul__input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={emailHandler}
                  required
                />
              </div>
              <div className="consul_report">
                <textarea
                  placeholder="Complaint"
                  value={complaint}
                  onChange={complaintHandler}
                  required
                />
              </div>
              <button className="consul__button">Submit</button>
            </form>
          </div>
        ) : (
          ""
        )}

        {button === "view" ? (
          <div>
            <h2>All Consultations</h2>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ConsultantForm;

