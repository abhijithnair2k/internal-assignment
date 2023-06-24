import React, { useEffect, useState } from "react";
import style from "./Jokes.module.css";
import axios from "axios";
import Popup from "./Popup";
import handleJokeSelection from "./Box";

const Jokes = () => {
  let [data, setData] = useState([]);
//   let [data2, setData2] = useState([]);
//   const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/categories"
        );
        const result = response.data;

        console.log(response.data);
        const modifiedData = result.map((item) => {
          const capitalizedItem = item.charAt(0).toUpperCase() + item.slice(1);
          return capitalizedItem;
        });

        setData(modifiedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div id={style.usersHome}>
      {data.map((item, index) => (
        <div id={style.cards}>
          <div id={style.item} onClick={() => handleJokeSelection(item)}>
            <h3>{item}</h3>
          </div>
          <div key={index}>Unlimited Jokes On {item}</div>
        </div>
      ))}
    </div>
  );
};

export default Jokes;
