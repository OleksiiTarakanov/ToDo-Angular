import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightrtColor: string; 

  constructor(private el: ElementRef) { 
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightrtColor || 'tomato');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string ): void{
    this.el.nativeElement.style.backgroundColor = color;
  }

}
