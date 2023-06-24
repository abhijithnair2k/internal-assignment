import React, { useEffect } from "react";
import "./box.css";
import Popup from "./Popup";
import { useState } from "react";
import axios from "axios";
import Jokes from "./Jokes";

const Box = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [data, setData] = useState([]);
  const [selectedJoke, setSelectedJoke] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/random?category=animal"
        );
        const result = response.data;
        setData(result);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleJokeSelection = (item) => {
    setSelectedJoke(item);
    setButtonPopup(true);
  };
  return (
    <div className="App">
      <main>
        <button  onClick={() => handleJokeSelection("Animal")}><Jokes /></button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>{data.value}</h3>
        </Popup>
      </main>
    </div>
  );
};

export default Box;
