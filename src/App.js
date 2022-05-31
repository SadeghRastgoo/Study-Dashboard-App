import React from "react";
import SidebarNav from "./components/SidebarNav/SidebarNav";
import Main from "./components/Main/Main";
import SidebarProfile from "./components/SidebarProfile/SidebarProfile";

const App = () => {
  return (
    <div className="wrapper">
      <SidebarNav />
      <Main />
      <SidebarProfile />
    </div>
  );
};

export default App;
