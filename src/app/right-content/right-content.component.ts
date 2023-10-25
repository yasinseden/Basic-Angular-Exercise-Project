import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.css']
})
export class RightContentComponent {

  @Input() component: string | undefined;

}
