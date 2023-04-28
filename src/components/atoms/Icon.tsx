import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IconTypes {
  iconName: IconProp | string;
}
const Icon = ({ iconName }:IconTypes ) => <FontAwesomeIcon icon={iconName} fontSize="large" />

export default Icon;
