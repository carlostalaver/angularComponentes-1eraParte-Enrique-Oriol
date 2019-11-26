import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  host: {},
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Input()
  progress: number = 0;
  constructor() { }

}
