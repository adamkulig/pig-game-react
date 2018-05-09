import React, { Component } from 'react';
import './App.scss';
import { PlayerPanel } from './PlayerPanel/PlayerPanel.js';
import { GamePanel } from './GamePanel/GamePanel.js';
import { Header } from './Header/Header.js';
import { Footer } from './Footer/Footer.js';
import { InfoIcon } from './InfoIcon/InfoIcon.js';
import { InfoContent } from './InfoContent/InfoContent.js';
import { InfoLanguages } from './InfoLanguages/InfoLanguages.js';
import { randomizer } from '../utils/functions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [
        {playerId: 1, totalScore: 0, currentScore: 0},
        {playerId: 2, totalScore: 0, currentScore: 0}],
      dicesValues: [0,0],
      activePlayer: 1,
      gameOver: false,
      infoIsOpen: false,
      polishLanguage: true
    }
  }

  showInfo = () => {
    this.setState({
      infoIsOpen: !this.state.infoIsOpen
    })
  }
  changeLanguage = () => {
    this.setState({
      polishLanguage: !this.state.polishLanguage
    })
  }

  isThisPlayerActive = (player) => player.playerId === this.state.activePlayer

  drawNumbers = () => {
    const dice1 = randomizer(6);
    const dice2 = randomizer(6);
    let sum;
    this.setState({
      dicesValues: [dice1,dice2]
    })
    if (dice1===1 && dice2===1){
      this.saveScore(25);
    } else if (dice1===1 || dice2===1) {
      this.saveScore(0);
    } else if (dice1===dice2){
      sum = (dice1+dice2)*2;
      this.addToCurrentScore(sum);
    } else {
      sum = dice1+dice2;
      this.addToCurrentScore(sum);
    }
  }

  addToCurrentScore = (sum) => {
    const currentPlayer = this.state.activePlayer;
    this.setState({
      scores: this.state.scores.map(player => {
        if (player.playerId === currentPlayer){
          return {
            ...player,
            currentScore: player.currentScore+sum
          }
        } else {
          return player;
        }
      })
   })
  }

  saveScore = (pigScore) => {
    const currentPlayer = this.state.activePlayer
    let currentPlayerScore = this.state.scores[this.state.activePlayer-1];
    const lastPlayer = this.state.scores.length;
    const nextPlayer = (currentPlayer !== lastPlayer) ? currentPlayer+1 : 1;
    const scoreToAdd = (pigScore === undefined)
    ? currentPlayerScore.currentScore
    : pigScore;
    const currentPlayerTotalScoreAfterSave = currentPlayerScore.totalScore + scoreToAdd
    const win = currentPlayerTotalScoreAfterSave>=100;
    
    currentPlayerScore = {
      ...currentPlayerScore,
      totalScore: currentPlayerTotalScoreAfterSave,
      currentScore: 0
    };
  
    this.setState({
      scores: this.state.scores.map(
      (score, index) => index === this.state.activePlayer - 1
        ? currentPlayerScore
        : score
      ),
      gameOver: win,
      activePlayer: win
        ? currentPlayer
        : nextPlayer
    });
  }
  
  newGame = () => {
    this.setState({
        scores: [
          {playerId: 1, totalScore: 0, currentScore: 0, winner: false},
          {playerId: 2, totalScore: 0, currentScore: 0, winner: false}],
        dicesValues: [0,0],
        activePlayer: randomizer(this.state.scores.length),
        gameOver: false
    })
  }

  render() {
    const { gameOver, dicesValues } = this.state;
    return (
      <div className='App'>
        <Header />
        <div className='game'>
          {this.state.scores.map(player => 
            <PlayerPanel 
              key={player.playerId} 
              scores={player}
              gameOver={gameOver}
              activity={this.isThisPlayerActive(player)}/>
          )}
          <GamePanel 
            dicesValues={dicesValues}
            newGame={this.newGame}
            drawNumbers={this.drawNumbers}
            saveScore={() => this.saveScore()}
            gameOver={gameOver} />
        </div>
        <Footer />
        <InfoIcon showInfo={this.showInfo}/>
        <InfoContent 
          infoIsOpen={this.state.infoIsOpen}
          polishLanguage={this.state.polishLanguage}/>
        <InfoLanguages 
          infoIsOpen={this.state.infoIsOpen}
          polishLanguage={this.state.polishLanguage}
          changeLanguage={this.changeLanguage}/>
      </div>
    );
  }
}

export default App;
