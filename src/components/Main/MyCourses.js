import React, { useState } from "react";
import MyCourseItem from "./MyCourseItem";

const MyCourses = () => {
  const [initialMyCourseItem] = useState({
    myCourseItems: [
      {
        title: "Web Design",
        lessons: 10,
        start: "May 12",
        rate: "4.8",
        level: "Elementary",
      },
      {
        title: "Development Basics",
        lessons: 8,
        start: "May 14",
        rate: "4.4",
        level: "Intermediate",
      },
      {
        title: "Data with Python",
        lessons: 5,
        start: "May 17",
        rate: "4.6",
        level: "Intermediate",
      },
      {
        title: "HTML Basics",
        lessons: 12,
        start: "May 26",
        rate: "4.7",
        level: "Elementary",
      },
      {
        title: "JavaScript",
        lessons: 8,
        start: "May 30",
        rate: "4.9",
        level: "Elementary",
      },
    ],
  });

  return (
    <div className="main__my-courses">
      <div className="my-courses__header">
        <h4 className="my-courses-header__heading text-2xl font-semi-bold">
          My Courses
        </h4>
        <button className="my-courses-header__view-all text-xs font-semi-bold">
          View All
        </button>
      </div>
      <div className="my-courses__courses">
        <ul className="my-course-courses__header text-xs font-semi-bold">
          <li>Course name</li>
          <li>Start</li>
          <li>Rate</li>
          <li>Level</li>
        </ul>
        <MyCourseItem
          title={initialMyCourseItem.myCourseItems[0].title}
          lessons={initialMyCourseItem.myCourseItems[0].lessons}
          start={initialMyCourseItem.myCourseItems[0].start}
          rate={initialMyCourseItem.myCourseItems[0].rate}
          level={initialMyCourseItem.myCourseItems[0].level}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bounding-box"
            viewBox="0 0 16 16"
          >
            <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
          </svg>
        </MyCourseItem>
        <MyCourseItem
          title={initialMyCourseItem.myCourseItems[1].title}
          lessons={initialMyCourseItem.myCourseItems[1].lessons}
          start={initialMyCourseItem.myCourseItems[1].start}
          rate={initialMyCourseItem.myCourseItems[1].rate}
          level={initialMyCourseItem.myCourseItems[1].level}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-code-slash"
            viewBox="0 0 16 16"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>
        </MyCourseItem>
        <MyCourseItem
          title={initialMyCourseItem.myCourseItems[2].title}
          lessons={initialMyCourseItem.myCourseItems[2].lessons}
          start={initialMyCourseItem.myCourseItems[2].start}
          rate={initialMyCourseItem.myCourseItems[2].rate}
          level={initialMyCourseItem.myCourseItems[2].level}
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Python</title>
            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
          </svg>
        </MyCourseItem>
        <MyCourseItem
          title={initialMyCourseItem.myCourseItems[3].title}
          lessons={initialMyCourseItem.myCourseItems[3].lessons}
          start={initialMyCourseItem.myCourseItems[3].start}
          rate={initialMyCourseItem.myCourseItems[3].rate}
          level={initialMyCourseItem.myCourseItems[3].level}
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>HTML5</title>
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
          </svg>
        </MyCourseItem>
        <MyCourseItem
          title={initialMyCourseItem.myCourseItems[4].title}
          lessons={initialMyCourseItem.myCourseItems[4].lessons}
          start={initialMyCourseItem.myCourseItems[4].start}
          rate={initialMyCourseItem.myCourseItems[4].rate}
          level={initialMyCourseItem.myCourseItems[4].level}
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>JavaScript</title>
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
          </svg>
        </MyCourseItem>
      </div>
    </div>
  );
};

export default MyCourses;
