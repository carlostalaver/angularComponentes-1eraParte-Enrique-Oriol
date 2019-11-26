import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  host : {'class': 'testHostClass'},
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  init: number = null;
  
  @Output()
  onDecrease = new EventEmitter<number>();  
  @Output()
  onComplete = new EventEmitter<void>();
  
  public counter: number = 0;
  private contDownTimerRef: any = null;

  constructor() { }

  startCountDown() {
    if (this.init && this.init > 0) {
      this.counter = this.init
      this.doCountDown();
    }
  }

  doCountDown() {
    this.deleteTimerOut()

    this.contDownTimerRef = setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountDonw();
    }, 1000)
  }

  private deleteTimerOut() {
    if (this.contDownTimerRef){
      clearTimeout(this.contDownTimerRef);
      this.contDownTimerRef =  null;
    } 
  }

  processCountDonw() {
    this.onDecrease.emit(this.counter)
    console.log('EL count es ', this.counter);

    if (this.counter == 0) {
      this.onComplete.emit()
      console.log('Counter end');
    } else {
      this.doCountDown();
    }

  }

  ngOnInit(): void {
    this.startCountDown(); 
  }

  ngOnDestroy(): void {
    this.deleteTimerOut();
  }

  ngOnChanges(changes): void {
    console.log(' ngOnchanges ', changes);
    this.startCountDown();    
  }

}
