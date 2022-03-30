import React from 'react';
import Button from '@mui/material/Button';

type Iconprops = {
    label?: string,
    children?: React.ReactChild
};

const handleShowPage = (label: string | undefined ) => console.log(`${label} page`)

export const ButtonIcon = ({label, children}:Iconprops) => {
    return (
        <Button onClick={() => handleShowPage(label)} variant="text">
            {children}
        </Button>
    );
};
