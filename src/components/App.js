import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";
import Slide from "../data";
import slides from "../data";

const App = (props) => {
  const [currentState, setState] = useState({
    title: "",
    text: "",
  });
  useEffect(() => {
    setState({
      title: Slide[0].title,
      text: Slide[0].text,
      len: 0,
      nextButton: false,
      prevButton: true,
    });
  }, []);
  const getNext = () => {
    let tempLen = currentState.len + 1;

    if (tempLen < Slide.length) {
      setState({
        len: tempLen,
        title: Slide[tempLen].title,
        text: Slide[tempLen].text,
      });
    }
    if (tempLen === Slide.length - 1) {
      setState({
        len: tempLen,
        title: Slide[tempLen].title,
        text: Slide[tempLen].text,
        nextButton: true,
        prevButton: false,
      });
    }
  };
  const getPrevious = () => {
    let tempLen = currentState.len - 1;
    if (tempLen > -1) {
      setState({
        len: tempLen,
        title: Slide[tempLen].title,
        text: Slide[tempLen].text,
      });
    }
    if (tempLen === 0) {
      setState({
        len: tempLen,
        title: Slide[tempLen].title,
        text: Slide[tempLen].text,
        nextButton: false,
        prevButton: true,
      });
    }
  };
  const resetData = () => {
    setState({
      title: Slide[0].title,
      text: Slide[0].text,
      len: 0,
    });
  };
  return (
    <div>
      <h1 data-testid="title">{currentState.title}</h1>
      <p data-testid="text">{currentState.text}</p>
      <button
        data-testid="button-next"
        onClick={getNext}
        disabled={currentState.nextButton}
      >
        Next
      </button>

      <button
        data-testid="button-prev"
        onClick={getPrevious}
        disabled={currentState.prevButton}
      >
        Prev
      </button>
      <button data-testid="button-restart" onClick={resetData}>
        Reset
      </button>
    </div>
  );
};

export default App;
