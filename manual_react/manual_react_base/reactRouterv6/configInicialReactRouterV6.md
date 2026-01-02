0. instalar paquete: npm install react-router-dom@6
1. crear archivo Navigation "src\routes\Navigation.tsx":

```
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react logo" />
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
          </ul>

          {/* <Route path="about" element={<About />} /> */}
          <Routes>
            <Route path="home" element={<h1>Home page</h1>} />
            <Route path="/*" element={<Navigate to="/home" replace />} />
          </Routes>
        </nav>
      </div>
    </BrowserRouter>
  );
};


clase css:

.nav-active {
  color: grey;
  transition: all 0.3s ease-out;
}

```

utilizar "navigation" "src\App.tsx":

```
import { Navigation } from "./routes/Navigation";

function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

export default App;

```
