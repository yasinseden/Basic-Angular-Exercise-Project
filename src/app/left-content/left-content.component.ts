import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.css']
})
export class LeftContentComponent {

  public componentToRender: string = '';

  @Output() componentToRenderEvent = new EventEmitter<string>();

  public sendLogin(): void {
    this.componentToRender = 'login'
    this.componentToRenderEvent.emit(this.componentToRender)
  }

  public sendSignup(): void {
    this.componentToRender = 'signup'
    this.componentToRenderEvent.emit(this.componentToRender)
  }
}
