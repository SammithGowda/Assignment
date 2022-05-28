import { useState } from "react";
import "./Home.css";
export const Home = () => {
  const [num, setNum] = useState();

  const firstcircle_hiding = () => {
    document.getElementsByClassName("first_circle")[0].style.display = "none";
    document.getElementsByClassName("empty_div_first_circle")[0].style.display =
      "block";
  };

  const secondcircle_hiding = () => {
    document.getElementsByClassName("second_circle")[0].style.display = "none";
    document.getElementsByClassName(
      "empty_div_second_circle"
    )[0].style.display = "block";
  };
  const thirdcircle_hiding = () => {
    document.getElementsByClassName("third_circle")[0].style.display = "none";
    document.getElementsByClassName("empty_div_third_circle")[0].style.display =
      "block";
  };
  const fourthcircle_hiding = () => {
    document.getElementsByClassName("fourth_circle")[0].style.display = "none";
    document.getElementsByClassName(
      "empty_div_fourth_circle"
    )[0].style.display = "block";
  };
  const fifthcircle_hiding = () => {
    document.getElementsByClassName("fifth_circle")[0].style.display = "none";
    document.getElementsByClassName("empty_div_fifth_circle")[0].style.display =
      "block";
  };

  const remove_first_circle = () => {
    document.getElementsByClassName("first_circle")[0].style.display = "block";
    document.getElementsByClassName("empty_div_first_circle")[0].style.display =
      "none";
  };
  const remove_second_circle = () => {
    document.getElementsByClassName("second_circle")[0].style.display = "block";
    document.getElementsByClassName(
      "empty_div_second_circle"
    )[0].style.display = "none";
  };
  const remove_third_circle = () => {
    document.getElementsByClassName("third_circle")[0].style.display = "block";
    document.getElementsByClassName("empty_div_third_circle")[0].style.display =
      "none";
  };
  const remove_fourth_circle = () => {
    document.getElementsByClassName("fourth_circle")[0].style.display = "block";
    document.getElementsByClassName(
      "empty_div_fourth_circle"
    )[0].style.display = "none";
  };
  const remove_fifth_circle = () => {
    document.getElementsByClassName("fifth_circle")[0].style.display = "block";
    document.getElementsByClassName("empty_div_fifth_circle")[0].style.display =
      "none";
  };
  const passing = (num) => {
    if (num == 1) {
      firstcircle_hiding();
    } else if (num == 2) {
      secondcircle_hiding();
    } else if (num == 3) {
      thirdcircle_hiding();
    } else if (num == 4) {
      fourthcircle_hiding();
    } else if (num == 5) {
      fifthcircle_hiding();
    } else {
      alert("Enter with 5 Number");
    }
  };
  return (
    <>
      <div className="main_div">
        <h5 className="first_text">Empty Div</h5>
        <div className="empty_div">
          <div
            onClick={() => {
              remove_first_circle();
            }}
            className="empty_div_first_circle"
          ></div>
          <div
            onClick={() => {
              remove_second_circle();
            }}
            className="empty_div_second_circle"
          ></div>
          <div
            onClick={() => {
              remove_third_circle();
            }}
            className="empty_div_third_circle"
          ></div>
          <div
            onClick={() => {
              remove_fourth_circle();
            }}
            className="empty_div_fourth_circle"
          ></div>
          <div
            onClick={() => {
              remove_fifth_circle();
            }}
            className="empty_div_fifth_circle"
          ></div>
        </div>
        <h5>circle</h5>
        <div className="circle_div">
          <div className="first_circle"></div>
          <div className="second_circle"></div>
          <div className="third_circle"></div>
          <div className="fourth_circle"></div>
          <div className="fifth_circle"></div>
        </div>
        <div className="inputdiv">
          <p>Enter number with in range 1 to 5</p>
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
            type="text"
            placeholder="Enter Number"
          />
          <br />
          <button
            onClick={() => {
              passing(num);
            }}
          >
            Shoot
          </button>
        </div>
      </div>
    </>
  );
};
