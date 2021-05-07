import React from "react";

import { KeyboardArrowDown, Event, Inbox, Today } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>
          <Inbox /> Inbox
        </li>

        <li>
          <Today /> Today
        </li>
        <li>
          <Event /> Next 7 days
        </li>
      </ul>
      <div className="siderbar__middle">
        <span>
          <KeyboardArrowDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">Projects will be here!</ul>
      Add project component here
    </div>
  );
};

export default Sidebar;
