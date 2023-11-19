import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfase';

@Injectable({providedIn: 'root'})

export class DbzService {
  public characters: Character[]=[{
    name:'Krilin',
    power:1000
  },{
    name:'Goku',
    power:9500
  },{
    name:'Vegetta',
    power:7500
  }];

  onNewCharacter(character:Character):void{
  this.characters.push(character);
  //characters.push agregar al final del arreglo
  //characters.unshift agregar arriba del arreglo
  }
  onDeleteCharacter(index: number){
    this.characters.splice(index, 1);
  }



}
