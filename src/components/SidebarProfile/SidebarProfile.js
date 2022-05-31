import React, { useState } from "react";
import Profile from "./Profile";
import SidebarCalendar from "./SidebarCalendar";
import Homework from "./Homework";

const SidebarProfile = () => {
  const [initialHomework, setStateHomework] = useState({
    homeworks: [
      { title: "Styling with CSS", tasks: 12, progress: 50 },
      { title: "Basics of programming", tasks: 18, progress: 65 },
      { title: "Basics to Program in Java", tasks: 10, progress: 25 },
    ],
  });

  return (
    <section className="sidebar-profile">
      <div className="sidebar-profile__header">
        <h4 className="sidebar-profile-header__heading  font-semi-bold">
          Profile
        </h4>
        <div className="sidebar-profile-header__edit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pen"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
          </svg>
        </div>
      </div>
      <Profile />
      <SidebarCalendar />
      <div className="sidebar-profile__homeworks">
        <h4 className="sidebar-profile-header__heading  font-semi-bold">
          Homework progress
        </h4>
        <Homework
          title={initialHomework.homeworks[0].title}
          tasks={initialHomework.homeworks[0].tasks}
          progress={initialHomework.homeworks[0].progress}
        />
        <Homework
          title={initialHomework.homeworks[1].title}
          tasks={initialHomework.homeworks[1].tasks}
          progress={initialHomework.homeworks[1].progress}
        />
        <Homework
          title={initialHomework.homeworks[2].title}
          tasks={initialHomework.homeworks[2].tasks}
          progress={initialHomework.homeworks[2].progress}
        />
      </div>
    </section>
  );
};

export default SidebarProfile;
