import React from 'react';
//import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

type Iconprops = {
    label: string,
    children
};

const ButtonIcon: React.FC<Iconprops> = ({label, children}) => {
    return (
        <Button variant="text">
            {label}
            {children}
        </Button>
    );
};

export default ButtonIcon;
