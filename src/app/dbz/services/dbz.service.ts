import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid'
uuid()
console.log

import { Character } from '../interfaces/character.interfase';



@Injectable({providedIn: 'root'})

export class DbzService {
  public characters: Character[]=[{
    id: uuid(),
    name:'Krilin',
    power:1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name:'Vegetta',
    power:7500
  }];

  addCharacter(character:Character):void{
  const newCharacter: Character={
    id:uuid(), ...character };

    this.characters.push(newCharacter);
  //characters.push agregar al final del arreglo
  //characters.unshift agregar arriba del arreglo
  }


deleteCharacterById(id:String){
  this.characters= this.characters.filter(character => character.id !== id);
}

}
