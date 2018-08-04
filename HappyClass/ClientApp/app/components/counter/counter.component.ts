import { Component } from '@angular/core';
import { animateList, listItemAnimation } from '../../appAnimation/fadeAnimation';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  animations: [animateList, listItemAnimation]
})
export class CounterComponent {
  public currentCount = 0;
  public lista = [1, 2, 3, 4];

  public incrementCounter() {
    this.currentCount++;
  }

}
