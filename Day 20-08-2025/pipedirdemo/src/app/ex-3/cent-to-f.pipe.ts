import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centToF',
  standalone: true
})
export class CentToFPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';
    const fahrenheit = (value * 9) / 5 + 32;
    return `${fahrenheit}F`;
  }
}