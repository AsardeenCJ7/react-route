import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OldBooks from "./components/OldBooks";
import NewBooks from "./components/NewBook";
import LogIn from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="App">
        {/* <Home />
        <About />
        <Contact /> */}

        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/user/1">User 1</Link>
            </li>
            <li>
              <Link to="/user/2">User 2</Link>
            </li>

            <li>
              <Link to="/books/old_books">Old Books</Link>
            </li>

            <li>
              <Link to="/books/new_books">New Books</Link>
            </li>

            <li>
              <Link to="/LogIn">LogIn</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/books">
              <Route path="old_books" element={<OldBooks />} />
              <Route path="new_books" element={<NewBooks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
