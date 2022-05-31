import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

const Homework = (props) => {
  return (
    <div className="homework">
      <div className="homework__progress">
        <CircularProgressbar
          value={props.progress}
          text={`${props.progress}%`}
        />
      </div>
      <div className="homework__details">
        <h5 className="homework-details__title font-semi-bold">
          {props.title}
        </h5>
        <p className="homework-details__tasks ">{props.tasks} Tasks</p>
      </div>
      <button className="homework__btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Homework;
