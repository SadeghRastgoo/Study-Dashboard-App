import React, { useState } from "react";
import CourseItem from "./CourseItem";

const NewCourse = () => {
  const [initialCourse] = useState({
    courses: [
      {
        cover: "./images/courses-cover/course-1.png",
        title: "Geography",
        lessons: 12,
        avatars: [
          "./images/avatars/2. Indian Man.png",
          "./images/avatars/4. Western Man.png",
          "./images/avatars/5. College Student.png",
        ],
      },
      {
        cover: "./images/courses-cover/course-2.png",
        title: "JavaScript Course",
        lessons: 15,
        avatars: [
          "./images/avatars/15. Astronaut.png",
          "./images/avatars/18. Artist.png",
          "./images/avatars/10. Muslim Woman.png",
        ],
      },
      {
        cover: "./images/courses-cover/course-3.png",
        title: "Photography Course",
        lessons: 8,
        avatars: [
          "./images/avatars/14. Teacher.png",
          "./images/avatars/20. Baby.png",
          "./images/avatars/8. Black Woman.png",
        ],
      },
    ],
  });

  return (
    <div className="main__new-courses">
      <h4 className="main-new-courses__heading text-2xl font-semi-bold">
        New Courses
      </h4>
      <div className="main-new-course__courses">
        <CourseItem
          cover={initialCourse.courses[0].cover}
          title={initialCourse.courses[0].title}
          lessons={initialCourse.courses[0].lessons}
          avatar1={initialCourse.courses[0].avatars[0]}
          avatar2={initialCourse.courses[0].avatars[1]}
          avatar3={initialCourse.courses[0].avatars[2]}
        />
        <CourseItem
          cover={initialCourse.courses[1].cover}
          title={initialCourse.courses[1].title}
          lessons={initialCourse.courses[1].lessons}
          avatar1={initialCourse.courses[1].avatars[0]}
          avatar2={initialCourse.courses[1].avatars[1]}
          avatar3={initialCourse.courses[1].avatars[2]}
        />
        <CourseItem
          cover={initialCourse.courses[2].cover}
          title={initialCourse.courses[2].title}
          lessons={initialCourse.courses[2].lessons}
          avatar1={initialCourse.courses[2].avatars[0]}
          avatar2={initialCourse.courses[2].avatars[1]}
          avatar3={initialCourse.courses[2].avatars[2]}
        />
      </div>
    </div>
  );
};

export default NewCourse;
