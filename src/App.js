import React from "react";
import "./App.css";
import ButtonHome from "./components/molecules/ButtonHome";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { v4 as uuid } from 'uuid';

function App() {
  return (
    <div className="App">
      <h2>Christian</h2>
      <ButtonHome 
        label='Nuevo Cliente'
        testIdButton={uuid()}
        text='Nuevo Cliente'
        testIdSubtitle={uuid()}
      >
        <PersonAddAltIcon color="action" fontSize="large" />
      </ButtonHome>
    </div>
  );
}

export default App;
