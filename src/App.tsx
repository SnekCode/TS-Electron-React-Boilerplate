import React from "react";
import Logo from "./logo.svg"

const App: React.FC = () => {
  return (
    <div className="App">
      <div>Hello Electron TS with React!</div>
      <img className="App-logo" src={Logo} alt="logo"/>
    </div>
  )
}

export default App;
