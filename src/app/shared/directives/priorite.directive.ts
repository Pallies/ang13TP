import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[carPriorite]',
})
export class PrioriteDirective {
  priorites: string[] = ['Urgente', 'Importante', 'Moyenne', 'mineure'];
  @Input() set carPriorite(name: string) {
    let bgColor;
    let color: string = 'black';
    switch (name) {
     
      case 'Importante':
        bgColor = [255, 193, 7];
        break;
      case 'Urgente':
        bgColor = [220, 53, 69];
        color = 'white';
        break;
      case 'Moyenne':
        bgColor = [40, 167, 69];
        break;
      default:
        bgColor = [248, 249, 250];
    }
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      `rgba(${bgColor[0]},${bgColor[1]},${bgColor[2]}, 0.45)`
    );
    this.renderer.setStyle(this.el.nativeElement, 'color', `${color}`);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
