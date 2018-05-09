import React, { Component } from 'react';
import classNames from 'classnames';
import './InfoLanguages.scss';
import pl from '../../images/pl.png';
import gb from '../../images/gb.png';

export class InfoLanguages extends Component {
  render () {
    return (
      <div onClick={this.props.changeLanguage} className={classNames('info-languages', this.props.infoIsOpen && 'info-languages--open')}>
        {this.props.polishLanguage 
        ? <img className='info-languages__icon info-languages__icon--gb' src={gb} alt='gb'/>
        : <img className='info-languages__icon info-languages__icon--pl' src={pl} alt='pl'/>}
      </div>
    )
  }
}

