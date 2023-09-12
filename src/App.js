import React from "react";
import "./App.css";
import Calendar from "./components/atoms/Calendar";
import AddClientForm2 from "./components/molecules/AddClientForm2";


function App() {
  return (
    <div className="App">
      <h2>Christian</h2>
      <Calendar testId="calendar" label='escoge tu fecha' />
      <AddClientForm2 />
    </div>
  );
}

export default App;
