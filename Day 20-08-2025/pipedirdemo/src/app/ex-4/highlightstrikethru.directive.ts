import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightStrikethru]' // usage: <p appHighlightStrikethru>Text</p>
})
export class HighlightStrikethruDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');       // highlight text color
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'line-through'); // strikethrough
  }

}
