import React from 'react';
import './InfoContent.scss';

export const InfoGB = () => {
  return (
    <div className='info-content--gb'>
      <p>Pig game is a simple dice game.</p> 
      <p>The player with turn throws the dice as much as he wants and the result of the given turn is added up. The player after the throw can save the result from his turn to the overall result and finish a turn.</p> 
      <p>When a player rolls one 'one', he loses the entire result from turn and ends his move.</p>
      <p>When a player rolls a doublet of 'ones' he gets 25 points for a total score, no matter how many points he has collected in turn and ends his move.</p>
      <p>When a player drops a doublet other than 'ones', the number of gained points cast counts twice.</p>
      <p>The player who earns at least 100 points first wins.</p>
    </div>
  )
}
