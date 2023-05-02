import React from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large" onClick={() => console.log("clicked!")}>
          BUTTON
        </Button>
        <Button size="medium">BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>

      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button size="medium" color="pink">
          BUTTON
        </Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button size="medium" color="gray">
          BUTTON
        </Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" color="gray" outline>
          BUTTON
        </Button>
        <Button size="medium" color="pink" outline>
          BUTTON
        </Button>
        <Button size="small" color="blue" outline>
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" color="gray" full>
          BUTTON
        </Button>
        <Button size="large" color="pink" full>
          BUTTON
        </Button>
        <Button size="large" color="blue" full>
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
