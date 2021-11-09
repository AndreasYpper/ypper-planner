import React from "react";

function NavMenu({onClickHandler}) {
  return (
    <div className="nav-menu-container" style={{backgroundColor: '#d3e6db'}}>
      <div
      onClick={() => onClickHandler('todo')}
        style={{ cursor: "pointer" }}
      >
        Todo's
      </div>
      <div
      onClick={() => onClickHandler('menu')}
        style={{ cursor: "pointer" }}
      >
        Menu planner
      </div>
      <div
      onClick={() => onClickHandler('training')}
        style={{ cursor: "pointer" }}
      >
        Training diary
      </div>
    </div>
  );
}

export default NavMenu
