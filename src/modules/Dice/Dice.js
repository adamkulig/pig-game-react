import React from 'react';
import './Dice.scss';
import dice0 from './dice0.png';
import dice1 from './dice1.png';
import dice2 from './dice2.png';
import dice3 from './dice3.png';
import dice4 from './dice4.png';
import dice5 from './dice5.png';
import dice6 from './dice6.png';


export class Dice extends React.Component {
 
  ShowImages = () => {
   const value = this.props.value;
   const diceClassHidden = 'game-panel__dices__img game-panel__dices__img--hidden'
   const diceClass = 'game-panel__dices__img'
   const diceClassWithPig = 'game-panel__dices__img game-panel__dices__img--pig'
   switch(value) {
     case 1:
      return <img className={diceClassWithPig} src={dice1} alt='dice'/>
     case 2:
      return <img className={diceClass} src={dice2} alt='dice'/>
     case 3:
      return <img className={diceClass} src={dice3} alt='dice'/>
     case 4:
      return <img className={diceClass} src={dice4} alt='dice'/>
     case 5:
      return <img className={diceClass} src={dice5} alt='dice'/>
     case 6:
      return <img className={diceClass} src={dice6} alt='dice'/>
     default:
      return <img className={diceClassHidden} src={dice0} alt='dice'/>
    }
  }

  render() {
    return (
      <this.ShowImages />
    );
  }
}  
