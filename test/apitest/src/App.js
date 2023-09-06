import "./App.css";
import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:80/hina", {
        number: "70",
        hina: "so cute",
        hapycb: "so sexy",
      });
      console.log(response.data);
      setResponseData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default App;
