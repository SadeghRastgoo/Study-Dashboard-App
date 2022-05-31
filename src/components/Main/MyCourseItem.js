import React from "react";

const MyCourseItem = (props) => {
  return (
    <div className="my-course-item animate__animated animate__fadeInUp animate__delay-1s">
      <div className="my-course-item__thumbnail">{props.children}</div>
      <div className="my-course-item__names">
        <h5 className="course-item-names__title text-sm">{props.title}</h5>
        <span className="course-item-names__lessons">
          {props.lessons} Lessons
        </span>
      </div>
      <span className="my-course-item__start font-semi-bold">
        {props.start}
      </span>
      <span className="my-course-item__rate font-semi-bold">{props.rate}</span>
      <span className="my-course-item__level font-semi-bold">
        {props.level}
      </span>
    </div>
  );
};

export default MyCourseItem;
