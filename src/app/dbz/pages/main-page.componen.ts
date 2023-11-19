import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interfase';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

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
console.log('MainPage');
console.log(character);
}
}

