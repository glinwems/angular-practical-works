import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[configurableHighlight]',
  standalone: true
})
export class ConfigurableHighlightDirective {
  @Input('highlightColor') highlightColor: string = 'yellow';
  private defaultColor: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.defaultColor = this.el.nativeElement.style.backgroundColor || '';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.highlightColor
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.defaultColor
    );
  }
}

