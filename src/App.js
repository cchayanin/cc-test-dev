import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Q1 from "./components/Q1";
import Q2 from "./components/Q2";
import Q3 from "./components/Q3";

function App() {
  const url =
    "https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/";
  const token = "ice";
  const url1 = `${url}q1/?token=${token}`;
  const url2 = `${url}q2/?token=${token}`;
  const url3 = `${url}q3/?token=${token}`;

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const fetchData = async (url = "", setData) => {
    const httpResponse = await axios.get(url);
    setData(httpResponse.data);
  };
  useEffect(() => {
    fetchData(url1, setData1);
  }, [url1]);
  useEffect(() => {
    fetchData(url2, setData2);
  }, [url2]);
  useEffect(() => {
    fetchData(url3, setData3);
  }, [url3]);

  return (
    <div className="App">
      <Q1 data={data1} />
      <Q2 data={data2} />
      <Q3 data={data3} />
    </div>
  );
}

export default App;
