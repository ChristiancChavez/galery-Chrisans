import React from 'react';
import { Avatar } from '@mui/material';
import { lime, orange, blue } from '@mui/material/colors';
import { TestIdType } from '../../Types/types';

const AvatarUser = ({ user, testId } ) => { 
  const userLetter = user === 'Stella' ? 'S' : user === 'Rogelio' ? 'R' : 'E'
  const backgroundColor = user === 'Stella' ? blue : user === 'Rogelio' ? lime : orange;
  return (
    <Avatar 
      data-testid={testId} 
      aria-label={`Este es un avatar que representa el usuario de ${user}`}
      sx={{ bgcolor: backgroundColor }}
    >
      {userLetter}
    </Avatar>
    )}

export default AvatarUser;
