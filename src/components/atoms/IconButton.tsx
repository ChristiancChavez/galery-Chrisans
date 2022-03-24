import React from 'react';
import Button from '@mui/material/Button';

type Iconprops = {
    label?: string,
    children?: React.ReactChild
};

const ButtonIcon = ({label, children}:Iconprops) => {
    return (
        <Button variant="text">
            {label}
            {children}
        </Button>
    );
};

export default ButtonIcon;
