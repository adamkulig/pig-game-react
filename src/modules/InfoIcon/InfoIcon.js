import React from 'react';
import './InfoIcon.scss';
import { FaInfoCircle } from 'react-icons/lib/fa';

export const InfoIcon = (props) => {
  return (
    <i onClick={props.showInfo} className='info-icon'><FaInfoCircle /></i>
  )
}
