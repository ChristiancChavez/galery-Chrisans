import React from "react";
import "./App.css";
import Icon from './components/atoms/Icon';
import AlarmIcon from '@mui/icons-material/Alarm';

function App() {
  return (
    <div className="App">
      <h2>Christian</h2>
      <Icon IconName={AlarmIcon} />
    </div>
  );
}

export default App;
