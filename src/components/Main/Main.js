import React from "react";
import MainHeader from "./MainHeader";
import NewCourse from "./NewCourses";
import MyCourses from "./MyCourses";

const Main = () => {
  return (
    <main className="main">
      <MainHeader />
      <NewCourse />
      <MyCourses />
    </main>
  );
};

export default Main;
