import React from "react";
import "./App.css";
import Calendar from "./components/atoms/Calendar";
import AddClientForm from "./components/molecules/AddClientForm";
import ClientListProvider  from "./context/clientListContext";

function App() {
  // This data is only for testing purpose. It'll be deleted.
  // const buttonsData = [
  //   { id: '1', label: "Nuevo Cliente", testId: 'newClient', icon: faUser},
  //   { id: '2', label: "Buscar Cliente", testId: 'searchClient', icon: faMagnifyingGlass},
  //   { id: '3', label: "Llamar Cliente", testId: 'callClient', icon: faPhone},
  //   { id: '4', label: "Buenos Cliente", testId: 'goodClient', icon: faThumbsUp},
  //   { id: '5', label: "Malos Cliente", testId: 'badClient', icon: faThumbsDown},
  // ];
  return (
    <ClientListProvider>
      <div className="App">
        <h2>Christian</h2>
        <Calendar testId="calendar" label='escoge tu fecha' />
        <AddClientForm />
      </div>
    </ClientListProvider>
  );
}

export default App;
