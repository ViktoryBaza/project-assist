import React, { useState } from "react";
import "../Sidebar/Sidebar.css";

const Sidebar: React.FC = () => {
  const [openSidebar, setOpenSlidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSlidebar(!openSidebar);
  };
  return (
    <div>
      <div className={`sidebar ${openSidebar ? "open" : ""}`}>
        <button className={`sidebar-toggle ${openSidebar ? 'openBth' : ""}`} onClick={toggleSidebar}>
          {openSidebar ? "×" : "☰"}
        </button>
        <ul>
          <li>1 страница</li>
          <li>2 страница</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
