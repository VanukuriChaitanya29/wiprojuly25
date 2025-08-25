// import { Component } from '@angular/core';     EXERCISE-11
// import { ShowHideComponent } from './show-hide.component/show-hide.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [ShowHideComponent],
//   template: `
//     <h1>Angular Show/Hide Checkbox Example</h1>
//     <show-hide-message></show-hide-message>
//   `
// })
// export class App {}


// import { Component } from '@angular/core';     EXERCISE-12
// import { CountryDropdownComponent } from './country-dropdown.component/country-dropdown.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CountryDropdownComponent],
//   template: `
//     <h1>Country Dropdown Example</h1>
//     <country-dropdown></country-dropdown>
//   `
// })
// export class App {}



// import { Component } from '@angular/core';     EXERCISE-13
// import { ColorPickerComponent } from './color-picker.component/color-picker.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [ColorPickerComponent],
//   template: `
//     <h1>Color Picker Example</h1>
//     <color-picker></color-picker>
//   `
// })
// export class App {}     



// import { Component } from '@angular/core';      EXERCISE-14
// import { SearchFilterComponent } from './search-filter.component/search-filter.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [SearchFilterComponent],
//   template: `
//     <h1>Search Filter Example</h1>
//     <search-filter></search-filter>
//   `
// })
// export class App {}


import { Component } from '@angular/core';
import { HomeComponent } from './home.component/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template:`
    <h1>Book List Example</h1>
    <home></home>
  `
})
export class App {}
