import React from 'react';
import classNames from 'classnames';
import './InfoContent.scss';
import { InfoPL } from './InfoPL';
import { InfoGB } from './InfoGB';

export const InfoContent = (props) => {
  return (
    <div className={classNames('info-content', props.infoIsOpen && 'info-content--open')}>
      {props.polishLanguage 
        ? <InfoPL />
        : <InfoGB />
      }
    </div>
  )
}
