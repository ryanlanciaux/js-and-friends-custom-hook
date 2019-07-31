import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Router, Link } from "@reach/router";

import "./styles.css";

import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

/*
In this exercise, we have 2 pages that both need the Coffee data

The first page is menu which is loading the 
data in /pages/Menu/index.js

The second area we want to use the data is in src/pages/About/index.js
but this one is importing src/components/Specialization. 
The Specialization section is where we want this data.

We could theoretically load the data here and pass it as props to the 
pages/components that need this data, but we would be loading this data
needlessly for the contact page.

Directions: 

1) Take the loading logic from src/pages/Menu/index and place
it in /src/hooks/useCoffeeData

2) Use this hook in /src/pages/Menu/index and /src/components/Specialization
*/

function App() {
  return (
    <>
      <div>
        <h1>Awesome Coffee</h1>
        <nav>
          <Link to="/">Menu</Link> | <Link to="about">About</Link> |{" "}
          <Link to="contact">Contact</Link>
        </nav>
      </div>
      <Router>
        <Menu path="/" />
        <About path="about" />
        <Contact path="contact" />
      </Router>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
