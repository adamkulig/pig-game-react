import React from 'react';
import classNames from 'classnames';
import './PlayerPanel.scss';


export class PlayerPanel extends React.Component {

  render() {
    const scores = this.props.scores;
    const {playerId, totalScore, currentScore} = scores;
    const active = this.props.activity;
    const { gameOver, firstGame } = this.props;
    
    return (
      <div className={`player-panel player-panel--${playerId}`}>
        <div className='player-panel__totalscore'>
          <span className={classNames('player-panel__totalscore__player', active && !firstGame &&  'player-panel__totalscore__player--active')}>Player {playerId}</span>
          <span className={classNames('player-panel__totalscore__score', active && !firstGame && 'player-panel__totalscore__score--active')}>{totalScore}</span>
        </div>
        <div className='player-panel__winner'>
          <span className={(active && gameOver && !firstGame) ? 'player-panel__winner--active' : 'player-panel__winner--hide'}>WIN!</span>
        </div>
        <div className='player-panel__currentscore'>
          <span className={classNames('player-panel__currentscore__player', active && !firstGame && 'player-panel__currentscore__player--active')}>current score</span>
          <span className={classNames('player-panel__currentscore__score', active && !firstGame && 'player-panel__currentscore__score--active')}>{currentScore}</span>
        </div>
      </div>
    );
  }
}
