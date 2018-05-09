import React from 'react';
import './Header.scss';
import pig from '../../images/pig.png';

export const Header = () => {
  return (
    <header className='header'>
      <img className='header__image' src={pig} alt='pig-face'/>
      <h1 className='header__text'>Pig Game</h1>
    </header>
  )
}