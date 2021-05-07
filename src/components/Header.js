import React from "react";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
const Header = () => {
  return (
    <nav>
      <div className="logo">
        <img src="images/logo.png" alt="Todoist" />

        <div className="settings">
          <ul>
            <li></li>

            <li>
              Pizza Slice <LocalPizzaIcon />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
