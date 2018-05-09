import React from 'react';
import classNames from 'classnames';
import './PlayerPanel.scss';


export class PlayerPanel extends React.Component {

  render() {
    const scores = this.props.scores;
    const {playerId, totalScore, currentScore} = scores;
    const active = this.props.activity;
    const gameOver = this.props.gameOver;
    
    return (
      <div className={`player-panel player-panel--${playerId}`}>
        <div className='player-panel__totalscore'>
          <span className={classNames('player-panel__totalscore__player', active && 'player-panel__totalscore__player--active')}>Player {playerId}</span>
          <span className={classNames('player-panel__totalscore__score', active && 'player-panel__totalscore__score--active')}>{totalScore}</span>
        </div>
        <div className='player-panel__winner'>
          <span className={(active && gameOver) ? 'player-panel__winner--active' : 'player-panel__winner--hide'}>WIN!</span>
        </div>
        <div className='player-panel__currentscore'>
          <span className={classNames('player-panel__currentscore__player', active && 'player-panel__currentscore__player--active')}>current score</span>
          <span className={classNames('player-panel__currentscore__score', active && 'player-panel__currentscore__score--active')}>{currentScore}</span>
        </div>
      </div>
    );
  }
}
