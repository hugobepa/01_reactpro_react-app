import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
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
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>

          {/* <Route path="/" element={<h1>Home page</h1>} /> */}
          {/* <Route path="about" element={<About />} /> */}
          <Routes>
            <Route path="about" element={<h1>About page</h1>} />
            <Route path="users" element={<h1>Users page</h1>} />
            <Route path="home" element={<h1>Home page</h1>} />
            <Route path="/*" element={<Navigate to="/home" replace />} />
          </Routes>
        </nav>
      </div>
    </BrowserRouter>
  );
};
