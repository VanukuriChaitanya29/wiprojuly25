import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Fruit = { name: string; image: string; description: string };

@Component({
  selector: 'app-display-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-list.html',
  styleUrls: ['./display-list.css']
})
export class DisplayListComponent {
  fruits: Fruit[] = [
  {
    name: 'Apple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
    description: 'Crisp and sweet, great for snacks and pies.'
  },
  {
    name: 'Banana',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
    description: 'Soft and creamy, full of potassium.'
  },
  {
    name: 'Orange',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg',
    description: 'Juicy citrus packed with vitamin C.'
  },
  {
    name: 'Strawberry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg',
    description: 'Bright and tangy, perfect with cream.'
  },
  {
    name: 'Grapes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg',
    description: 'Small, sweet, and great for sharing.'
  }
];

}