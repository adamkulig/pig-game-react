import React from 'react';
import './InfoContent.scss';

export const InfoPL = () => {
  return (
    <div className='info-content--pl'>
      <p>Gra w świnie to prosta gra w kości.</p> 
      <p>Gracz mający kolejkę rzuca kośćmi wielokrotnie według uznania a wynik danej kolejki sumuje się. Gracz po rzucie może zapisać wynik z kolejki do wyniku ogólnego i skończyć kolejkę.</p> 
      <p>Gdy gracz wyrzuci jedną 'jedynkę' to traci cały wynik z kolejki i kończy swój ruch.</p>
      <p>Gdy gracz wyrzuci dublet 'jedynek' dostaje 25 punktów to wyniku ogólnego, bez względu ile uzbierał w kolejce punktów i kończy swój ruch.</p>
      <p>Gdy gracz wyrzuci dublet inny niż 'jedynek' to ilość rzuconych oczek liczy się podwójnie.</p>
      <p>Wygrywa ten gracz który pierwszy zdobędzie przynajmniej 100 punktów.</p>
    </div>
  )
}
