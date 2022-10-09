import React from "react";
import axios from "axios";

const baseURL = "http://developers.gictsystems.com/api/dummy/items/";
const AuthStr = "Bearer ".concat("ALDJAK23423JKSLAJAF23423J23SAD3");
// const myApiURL = "http://127.0.0.1:8000/api/v1/";

function FormData() {
  const [fullnames, setFullnames] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Log the data
    console.log(fullnames, email, phone, address);
    // send request
    try {
      const postOptions = {
        method: "POST",
        mode: "no-cors",
        headers: {
          Authorization: AuthStr,
          "Content-Type": "application/json",
        },
      };
      const data = { author: "1", title: "Sample Title", body: "Sample Body" };
      // Object to pass in the
      const person_data = {
        fullnames,
        email,
        phone,
        address,
      };
      /**
       * Adding the header to the post request was brings a CORS error message i.e
       * CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource
       */

      const resp = await axios.post(baseURL, JSON.stringify(data));
      console.log(resp.data);
    } catch (error) {
      console.log(error.resp);
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
