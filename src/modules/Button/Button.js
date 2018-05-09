import React, { Component } from 'react';
import './Button.scss';
import classNames from 'classnames';

export class Button extends Component {

  render() {
    const { isHide, clickHandler, icon, text }  = this.props;
    return (
      <button className={classNames('btn', isHide && 'btn--hide')} onClick={clickHandler}>
        <i className='btn__icon'>{icon}</i>
        <span className='btn__text'>{text}</span>
      </button>
    );
  }
}