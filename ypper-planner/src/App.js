import React, { useState } from "react";

import Navbar from "./components/shared/Navbar";
import TodoView from "./components/todo/TodoView";
import MenuView from './components/menu-planner/MenuView'
import TrainingView from './components/training/TrainingView'

function App() {
  const [nav, setNav] = useState(<TodoView />);

  const onNavChange = (newNav) => {
    handleNav(newNav)
  }

  const handleNav = (newNav) => {
    if (newNav === 'todo') {
      setNav(<TodoView />)
    }
    else if (newNav === 'menu') {
      setNav(<MenuView />)
    }
    else if (newNav === 'training') {
      setNav(<TrainingView />)
    }
  }

  return (
    <div className="App">
      <Navbar onClickHandler={onNavChange} />
      <div className="content" style={{paddingTop: '100px'}}>{nav}</div>
    </div>
  );
}

export default App;
