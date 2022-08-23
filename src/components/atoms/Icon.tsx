import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconTypes = {
  iconName: any;
}
const Icon = ({ iconName }:IconTypes ) => <FontAwesomeIcon icon={iconName} fontSize="large" />

export default Icon;
