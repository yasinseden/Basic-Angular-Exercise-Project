import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const rgb = this.generateColor();
    this.el.nativeElement.style.backgroundColor = rgb;
    console.log(rgb);
    
  }

  private generateNumber(): string | number {
    const randomNumber = Math.floor(Math.random() * 256) + 1;
    if (randomNumber < 10) {
      return `00${randomNumber}`
    } else if (randomNumber < 100) {
      return `0${randomNumber}`
    } else {
      return randomNumber
    }
  }

  private generateColor(): string {
    const rgbArr = [];
    for (let i = 0; i < 3; i++) {
      const randomNumber = this.generateNumber();
      rgbArr.push(randomNumber);
    }
    return `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`
  }
}
