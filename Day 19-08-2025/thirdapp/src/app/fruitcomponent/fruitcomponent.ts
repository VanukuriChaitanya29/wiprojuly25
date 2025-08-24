import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFruit } from '../models/fruit.interface';

@Component({
  selector: 'fruit',
  standalone: true,
  templateUrl: './fruitcomponent.html',
  styleUrls: ['./fruitcomponent.css']
})
export class FruitComponent {
  @Input() fruit!: IFruit;
  @Output() remove = new EventEmitter<IFruit>();

  onRemoveClick() {
    this.remove.emit(this.fruit);
  }
}