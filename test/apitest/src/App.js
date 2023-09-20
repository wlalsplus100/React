import "./App.css";
import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [responseData, setResponseData] = useState(null);
  const plusNum = () => {
    setNum(num + 10);
  };
  const fetchData = async () => {
    try {
      const response = await axios.post("/hina", {
        number: "70",
        hina: "so cute",
        hapycb: "so sexy",
      });
      console.log(response.data);
      setResponseData(response.data);
      setNum(response.data.number);
      if (responseData) {
        const maps = responseData.map;
        console.log(maps);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      {responseData && (
        <div>
          <button
            onClick={() => {
              plusNum();
            }}
          >
            +10
          </button>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
          <p>{num}</p>
          <p>{responseData.hina}</p>
        </div>
      )}
    </>
  );
};

export default App;
