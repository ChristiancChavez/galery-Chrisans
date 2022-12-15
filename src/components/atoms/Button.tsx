import React from "react";
import { Fade, Tooltip, Button } from "@mui/material";
import {TestIdType} from '../../Types/types';

interface IconTypes extends TestIdType {
  label: string;
  children?: React.ReactChild;
}

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
      <Button onClick={handleShowPage} variant="text" data-testid={testId}>
        {children}
      </Button>
    </Tooltip>
  );
};

export default ButtonIcon;
