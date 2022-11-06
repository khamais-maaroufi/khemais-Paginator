import React, { useState, useEffect } from "react";
import "./Paginator.css";

const Paginator = (props) => {
  const [pages, setPages] = useState();
  const { longeur, CurrentP, setCurrentP, PerPage } = props;
  let nbPages = 0;
  if (longeur !== 0) {
    const rest = Number(longeur) % PerPage;
    if (rest === 0) {
      nbPages = Number(longeur) / PerPage;
    } else {
      nbPages = ((Number(longeur)-rest) / PerPage) + 1;
    }
  }

  const selected = {
    backgroundColor: "#003f46",
    transform: "scale(1.3)",
    color: "white",
  };

  useEffect(() => {
    let arr = [];
    if (nbPages < 5) {
      for (let i = 1; i <= nbPages; i++) {
        arr.push(i);
      }
    } else if (nbPages <= 0) {
      arr.push(0);
    } else {
      if (CurrentP > 2 && CurrentP < nbPages - 2) {
        for (let i = CurrentP - 2; i <= Number(CurrentP) + 2; i++) {
          arr.push(i);
        }
      } else if (CurrentP <= 2) {
        for (let i = 1; i <= 5; i++) {
          arr.push(i);
        }
      } else if (CurrentP >= nbPages - 2) {
        for (let i = CurrentP - 2; i <= nbPages; i++) {
          arr.push(i);
        }
      }
    }

    setPages(arr);
  }, [CurrentP]);

  const currentor = (e) => {
    e.preventDefault();
    // console.log(e.target.id);
    setCurrentP(e.target.id);
  };
  const handelprev = () => {
    if (CurrentP > 1) {
      let varii = 0;
      varii = Number(CurrentP) - 1;
      setCurrentP(varii);
    }
  };
  const handelNext = () => {
    if (CurrentP < nbPages ) {
      let varii = 0;
      varii = Number(CurrentP) + 1;
      setCurrentP(varii);
    }
  };
  const JumpToStart = () => {
    setCurrentP(1);
  };
  const JumpToEnd = () => {
    setCurrentP(nbPages);
    
  };
  return (
    <div className="paginator-container">
      <div className="hefubuer">
        <div className="jumper" id="leftdds" onClick={JumpToStart}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/54/54227.png"
            alt="jump-to-start"
          ></img>
        </div>
        <div className="flache" onClick={handelprev}>
          {" "}
          <img
            id="leftdds"
            src="https://cdn-icons-png.flaticon.com/512/860/860790.png"
            onClick={handelprev}
          ></img>
        </div>
      </div>
      {pages &&
        pages.map((item) => (
          <div
            className="circle-pgin"
            onClick={(e) => currentor(e)}
            style={CurrentP == item ? selected : {}}
            id={item}
          >
            {item}
          </div>
        ))}
      <div className="hefubuer">
        <div className="flache" onClick={handelNext}>
          {" "}
          <img
            id="rightfsf"
            src="https://cdn-icons-png.flaticon.com/512/860/860828.png"
            onClick={handelNext}
          ></img>
        </div>
        <div className="jumper" id="rightfsf" onClick={JumpToEnd}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/54/54366.png"
            alt="jump-to-end"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
