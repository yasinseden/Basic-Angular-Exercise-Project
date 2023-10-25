import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public component: string = '';

  public receivedComponent(component: string): void {
    this.component = component;
  }

}
