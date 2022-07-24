import React from 'react';
import { Avatar } from '@mui/material';
import { lime, orange, blue } from '@mui/material/colors';

type AvatarUserTypes = {
  testId: string,
  user: string
}
const AvatarUser = ({ user, testId }:AvatarUserTypes ) => (
  <Avatar 
    data-testid={testId} 
    sx={{ bgcolor: user === 'Stella' ? blue : user === 'Rogelio' ? lime : orange }}
  >
    {user}
  </Avatar>
  )

export default AvatarUser;
