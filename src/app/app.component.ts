import {Component, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger, sequence, query} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('triggerName', [
      transition('void => *', [
        query('h1', style({opacity: 0})),
        query('main:enter', style({transform: 'translateX(-50px)'})),

        query('h1, :enter', animate('300ms')),
      ])
    ])
  ]
})
export class AppComponent {
  value = 1;
}
