// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';


// @Component({
//   selector: 'home',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('thirdapp');
// }

// import { Component } from '@angular/core';
// import { Ex2Component } from './ex2.component/ex2.component';

// @Component({
//   selector: 'home',
//   standalone: true,
//   imports: [Ex2Component],
//   template: `
//     <ex2></ex2>
//   `
// })
// export class App {}


// import { Component } from '@angular/core';
// import { Ex3Component } from './ex3.component/ex3.component';

// @Component({
//   selector: 'home',
//   standalone: true,
//   imports: [Ex3Component],
//   template: `
//     <ex3></ex3>
//   `
// })
// export class App {}


// import { Component } from '@angular/core';
// import { Ex4Component } from './ex4.component/ex4.component';

// @Component({
//   selector: 'home',
//   standalone: true,
//   imports: [Ex4Component],
//   template: `
//     <ex4></ex4>
//   `
// })
// export class App {}


import { Component } from '@angular/core';
import { HomeComponent } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template:` <home></home>`,
})
export class App {}