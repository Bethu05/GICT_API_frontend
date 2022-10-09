import React from "react";
import axios from "axios";

const submitBaseURL = "http://developers.gictsystems.com/api/dummy/submit/";
const AuthStr = "Bearer ".concat("ALDJAK23423JKSLAJAF23423J23SAD3");

function FormData() {
  const [fullnames, setFullnames] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(fullnames, email, phone, address);
    try {
      const postOptions = {
        method: "POST",
        mode: "no-cors",
        headers: {
          Authorization: AuthStr,
          "Content-Type": "application/json",
        },
      };
      // Object to pass in the post request
      const person_data = {
        fullnames,
        email,
        phone,
        address,
      };
      const resp = await axios.post(submitBaseURL, JSON.stringify(person_data));
      console.log(resp.data);
    } catch (err) {
      console.log(err.resp);
    }
  };

  return (
    <div className="flex-box">
      <form className="form" method="post" onSubmit={handleSubmit}>
        <div className="input-div">
          <input
            type="text"
            size="30"
            name="fullnames"
            placeholder="Full Names"
            onChange={(e) => setFullnames(e.target.value)}
            required={true}
          />
        </div>
        <div className="input-div">
          <input
            type="email"
            size="30"
            name="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </div>
        <div className="input-div">
          <input
            type="tel"
            size="30"
            name="phone"
            pattern="[0-9]{4}[0-9]{6}"
            placeholder="07********"
            maxLength={10}
            onChange={(e) => setPhone(e.target.value)}
            required={true}
          />
        </div>
        <div className="input-div">
          <input
            type="text"
            size="30"
            name="address"
            placeholder="Place,City"
            onChange={(e) => setAddress(e.target.value)}
            required={true}
          />
        </div>
        <div className="input-div">
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
}

export default FormData;
