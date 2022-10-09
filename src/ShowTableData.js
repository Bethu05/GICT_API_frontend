import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const fetchBaseURL = "http://developers.gictsystems.com/api/dummy/items/";
const AuthStr = "Bearer ".concat("ALDJAK23423JKSLAJAF23423J23SAD3");
// const localBaseURL = "http://127.0.0.1:8000/api/v1/";

class ShowTableData extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], delay: 10000 };
  }
  componentDidMount() {
    this.interval = setInterval(this.fetchData, this.state.delay);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.delay !== this.state.delay) {
      clearInterval(this.interval);
      this.interval = setInterval(this.fetchData, this.state.delay);
    }
  }
  /**
   * THE FETCHING OF DATA FROM THE API RETURNED A CORS ERROR i.e
   * Cross-Origin Request Blocked: The Same Origin Policy disallows
   * reading the remote resource at http://developers.gictsystems.com/api/dummy/items/.
   *
   * But in my case this is how i go about fetching data from my 'local API' endpoint
   */
  fetchData = () => {
    const getOptions = {
      method: "GET",
      mode: "no-cors",
      headers: {
        Authorization: AuthStr,
        "Content-Type": "application/json",
      },
    };
    axios
      .get(fetchBaseURL, getOptions)
      .then((res) => {
        this.setState({ posts: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error!!! ", err);
      });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="flex-box">
        <table className="data-tbl">
          <thead>
            <tr>
              <th>FULL NAME</th>
              <th>EMAIL ADDRESS</th>
              <th>PHONE NO</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dummy name</td>
              <td>dummyname@gmail.com</td>
              <td>0700123456</td>
              <td>Langata, Nairobi</td>
              <td>
                <Link>Edit</Link>
              </td>
            </tr>
            {this.state.posts.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.fullnames}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link>Edit</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowTableData;
