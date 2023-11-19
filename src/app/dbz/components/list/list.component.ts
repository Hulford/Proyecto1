import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfase';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
public characterList: Character[]=[{
  name:'Trunks',
  power:10
}]

@Output()
public onDelete: EventEmitter<String> = new EventEmitter();

onDeleteCharacter(id?: string):void{
  // Todo emitir el id del personaje
if (!id)return;

  this.onDelete.emit(id);
}
}
