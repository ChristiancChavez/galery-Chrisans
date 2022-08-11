import React from "react";
import "./App.css";
import ActionsButton from "./components/molecules/ActionsButton.tsx";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';

function App() {
  const items = [
    { id: 1, label: "Sagrado corazón", testId: '1', icon: <PersonAddAltIcon /> },
    { id: 2, label: "misericordioso", testId: '2', icon: <PersonSearchIcon /> },
    { id: 3, label: "Sagrada familia", testId: '3', icon: <PhoneInTalkIcon /> },
    { id: 4, label: "Guadalupe", testId: '4', icon: <PlaylistAddCheckIcon /> },
    { id: 5, label: "Guadalupe infantil", testId: '5', icon: <PlaylistRemoveIcon /> },
  ];
  return (
    <div className="App">
      <h2>Christian</h2>
      <ActionsButton buttons={items} />
    </div>
  );
}

export default App;
