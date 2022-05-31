import React from "react";

const CourseItem = (props) => {
  return (
    <div className="new-courses__course">
      <div className="new-course__cover">
        <img className="new-course-cover__img" src={props.cover} />
      </div>
      <h4 className="new-courses__title font-semi-bold">{props.title}</h4>
      <span className="text-xs">{props.lessons} Lessons</span>
      <div className="new-courses__footer">
        <div className="new-courses__avatars">
          <img
            className="new-courses__avatar new-courses__avatar--1"
            src={props.avatar1}
          />
          <img
            className="new-courses__avatar new-courses__avatar--2"
            src={props.avatar2}
          />
          <img
            className="new-courses__avatar new-courses__avatar--3"
            src={props.avatar3}
          />
        </div>
        <button className="new-courses__btn">
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
    </div>
  );
};

export default CourseItem;
