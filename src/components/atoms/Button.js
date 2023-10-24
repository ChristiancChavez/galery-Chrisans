import React from "react";
import { Fade, Tooltip, Button } from "@mui/material";
import { TestIdType } from '../../Types/types';

const ButtonIcon = ({ label, children, testId }) => {
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
