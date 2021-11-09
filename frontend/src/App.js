import React from "react";

import Navbar from "./components/shared/Navbar";
import TodoView from "./components/todo/TodoView";
import MenuView from './components/menu-planner/MenuView'
import TrainingView from './components/training/TrainingView'
import NavMenu from "./components/shared/NavMenu";

function App() {
  const [nav, setNav] = React.useState(<TodoView />);
  const [menu, setMenu] = React.useState(false)

  const onNavChange = (newNav) => {
    handleNav(newNav)
  }

  const toggleMenu = () => {
    setMenu(!menu)
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
      <Navbar onClickHandler={toggleMenu} />
      {menu ? <NavMenu onClickHandler={onNavChange} /> : null}
      <div className="content" style={{paddingTop: '100px'}}>{nav}</div>
    </div>
  );
}

export default App;
