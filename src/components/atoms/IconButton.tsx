import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

type Iconprops = {
    label: string,
    children: React.ReactChild,
    testId: string
};

export const IconButton = ({label, children, testId}:Iconprops) => {
    const handleShowPage = (label?: string) => console.log(`${label} page`);

    return (
        <Tooltip title={label} TransitionComponent={Fade} TransitionProps={{ timeout: 400 }} role="tooltip">
            <Button onClick={() => handleShowPage(label)} variant="text" data-testid={testId}>
                {children}
            </Button>
        </Tooltip>
    );
};
