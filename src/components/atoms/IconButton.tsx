import React from "react";
import { Fade, Tooltip, Button } from "@mui/material";

type IconTypes = {
  label: string;
  children?: React.ReactChild;
  testId: string;
};

const ButtonIcon = ({ label, children, testId }:IconTypes ) => {
  const handleShowPage = () => console.log(`${label} page`);
  return (
    <Tooltip
      title={label}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 400 }}
      role="tooltip"
      aria-label={`Este es un label para ${label}`}
    >
      <Button 
        onClick={handleShowPage} 
        variant="text" 
        data-testid={testId}
        aria-label={`Este es un bot´n para ${children}`}
        >
        {children}
      </Button>
    </Tooltip>
  );
};

export default ButtonIcon;
