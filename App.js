import React, { Component } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ShowTableData from "./ShowTableData";
import FormData from "./FormData";

// const baseURL = "http://developers.gictsystems.com/api/dummy/items/";
// const AuthStr = "Bearer ".concat("ALDJAK23423JKSLAJAF23423J23SAD3");
class App extends Component {
  render() {
    return (
      <div>
        <div className="flex-box header">
          <div>
            <h2>GICT SYSTEMS</h2>
          </div>
        </div>
        <div className="flex-box navbar">
          <ul className="flex-box">
            <li>
              <Link to="/">FORM DATA</Link>
            </li>
            <li>
              <Link to="/table">TABLE DATA</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<FormData />} />
          <Route path="/table" element={<ShowTableData />} />
        </Routes>
      </div>
    );
  }
}

export default App;
