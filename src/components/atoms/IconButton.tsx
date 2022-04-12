import React from 'react';
import Button from '@mui/material/Button';

type IconTypes = {
    label?: string,
    children?: React.ReactChild
};

const handleShowPage = (label: string | undefined ) => console.log(`${label} page`)

export const ButtonIcon = ({label, children}:IconTypes) => {
    return (
        <Button onClick={() => handleShowPage(label)} variant="text">
            {children}
        </Button>
    );
};
