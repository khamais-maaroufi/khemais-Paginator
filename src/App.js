import React, { useState, useEffect } from "react";
import "./App.css";
import Paginator from "./Paginator";

const App = () => {
  const [CurrentP, setCurrentP] = useState(1);
  const n = 5;
  const arrayi = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "17",
    "18",
    "19"
  ];

  /*explaining Usability here 
  *suppose you have an  array of objects you want to render 

  1)the length of the array will be passed to the longeur param
  2)create a currentP react hooks and passe it to the Paginator component
  3) passe the number of object per page then slice your array according to 
  the currentP hooks and the number of object per page you want 
  4)use the code i wrote with Arrayi.slice.map to render your on array with the currentP hook
  & the n display variable 
  */
  return (
    <div className="App">
      <div>
        {arrayi
          .slice(Number(CurrentP) * n - n, Number(CurrentP) * n)
          .map((item) => (
            <h1>{item}</h1>
          ))}
      </div>
      <Paginator
        longeur={arrayi.length}
        CurrentP={CurrentP}
        setCurrentP={(value) => {
          setCurrentP(value);
        }}
        PerPage={n}
      />
      <div style={{ marginTop: "5%" }}>
        <h3>
          {" "}
          check code in My Github repository{" "}
          <a href="https://github.com/khamais-maaroufi/khemais-Paginator.git">
            Click here
          </a>
        </h3>
      </div>
    </div>
  );
};

export default App;
