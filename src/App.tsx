import { useState } from "react";
import gif1 from "./assets/mochi-cat-glomp.gif";
import gif2 from "./assets/cute-dog-biting-rose3.gif";
import "./App.css";

const phrases = [
  "No",
  "nooooooooo",
  "are you sure",
  "are you acoustic",
  "seriously?",
  "click yes rn",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesSize = noCount * 20 + 18;
  const noSize = 18 - noCount * 2;

  function onNoClick() {
    setNoCount(noCount + 1);
  }

  function noPhrase() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentines-container">
      {yesPressed ? (
        <>
          <div className="yes-img">
            <img src={gif1}></img>
          </div>
          <h1>See you feb 14!!!</h1>
        </>
      ) : (
        <>
          <figure className="dogFig">
            <img className="dogImage" src={gif2} height={300} />
          </figure>
          <div className="title">
            <h1>Nicole, will you be my valentine?</h1>
          </div>

          <div className="buttons">
            <button
              style={{ fontSize: yesSize }}
              onClick={() => setYesPressed(true)}
              className="yesButton"
            >
              Yes!!
            </button>
            <button
              style={{ fontSize: noSize }}
              onClick={onNoClick}
              className="noButton"
            >
              {noPhrase()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
