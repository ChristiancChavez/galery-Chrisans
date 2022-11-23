import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type IconTypes = {
  iconName: IconProp;
}
const Icon = ({ iconName }:IconTypes ) => <FontAwesomeIcon icon={iconName} fontSize="large" />

export default Icon;
