import React, { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Header from "./components/Header/Header";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    axios
      .get(
        "https://api.watchmode.com/v1/sources/?apiKey=PghF3QZOOAhLIaIqOVTYYfz85suqhfdLDlInJ0zw"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      });
  }, []); 
  
  if (loading) {
    return (
      <div className="App">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } */

  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
