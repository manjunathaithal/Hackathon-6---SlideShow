import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [currentState, setState] = useState({
    title: "",
    text: "",
  });
  useEffect(() => {
    setState({
      title: props.slides[0].title,
      text: props.slides[0].text,
      len: 0,
      nextButton: false,
      prevButton: true,
      disButton: true,
    });
  }, []);
  const getNext = () => {
    let tempLen = currentState.len + 1;

    if (tempLen < props.slides.length) {
      setState({
        len: tempLen,
        title: props.slides[tempLen].title,
        text: props.slides[tempLen].text,
      });
    }
    if (tempLen === props.slides.length - 1) {
      setState({
        len: tempLen,
        title: props.slides[tempLen].title,
        text: props.slides[tempLen].text,
        nextButton: true,
        prevButton: false,
        disButton: false,
      });
    }
  };
  const getPrevious = () => {
    let tempLen = currentState.len - 1;
    if (tempLen > -1) {
      setState({
        len: tempLen,
        title: props.slides[tempLen].title,
        text: props.slides[tempLen].text,
      });
    }
    if (tempLen === 0) {
      setState({
        len: tempLen,
        title: props.slides[tempLen].title,
        text: props.slides[tempLen].text,
        nextButton: false,
        prevButton: true,
        disButton: true,
      });
    }
  };
  const resetData = () => {
    setState({
      title: props.slides[0].title,
      text: props.slides[0].text,
      len: 0,
      nextButton: false,
      prevButton: true,
      disButton: true,
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
      <button
        data-testid="button-restart"
        onClick={resetData}
        disabled={currentState.disButton}
      >
        Restart
      </button>
    </div>
  );
};

export default App;
