import Home from "./Home";
import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

import SubMenu from "./SubMenu";

function App() {
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState(0);
  const changeUser = (name, num) => {
    setUser(name);
    setUserId(num);
  };

  const [subMenu, setSubMenu] = useState(false);
  const closeSub = () => {
    setSubMenu(false);
  };
  window.addEventListener("scroll", closeSub);

  return (
    <div className="App">
      <Router>
        <SubMenu
          changeUser={changeUser}
          user={user}
          subMenu={subMenu}
          setSubMenu={setSubMenu}
          closeSub={closeSub}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
