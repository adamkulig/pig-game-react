import React from 'react';
import './GamePanel.scss';
import {FaPlus, FaCheck} from 'react-icons/lib/fa';
import {MdLoop} from 'react-icons/lib/md';
import {Dice} from '../Dice/Dice.js';
import {Button} from '../Button/Button.js'


export class GamePanel extends React.Component {
  render() {
    const { dicesValues, gameOver, newGame, drawNumbers, saveScore } = this.props;

    return (
      <div className='game-panel'>
        <div className='game-panel__dices'>
          {dicesValues.map((dice,index) => 
            <Dice key={index} value={dicesValues[index]}/>
          )}
        </div>
        <div className='game-panel__buttons'>
          <Button
            clickHandler={newGame}
            icon={<FaPlus />}
            text='New game'/>
          <Button
            clickHandler={drawNumbers}
            icon={<MdLoop />}
            text='Roll dice'
            isHide={gameOver}/>
          <Button
            clickHandler={saveScore}
            icon={<FaCheck />}
            text='Hold'
            isHide={gameOver}/>
        </div>
      </div>
    );
  }
}
