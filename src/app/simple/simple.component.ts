import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  animations: [
    trigger('expandingHorizontally', [
      state('false', style({width: '15px'})),
      state('true', style({width: '45px'})),
      transition('false <=> true', animate('300ms'))
    ]),
    trigger('movingHorizontally', [
      state('false', style({transform: 'translateX(0)'})),
      state('true', style({transform: 'translateX(30px)'})),
      transition('false <=> true', animate('300ms'))
    ]),

    trigger('move', [
      state('*', style({transform: `translate({{x}}px, {{y}}px)`}), {params: {x: '0', y: '0'}}),
      transition('* <=> *', [
          animate('500ms')
      ]),
    ])
  ]
})
export class SimpleComponent implements OnInit {
  checked = false;
  moveParams = {x: 100, y: 100};

  @HostListener('window:click', ['$event'])
  click(event: MouseEvent) {
    if (event.target !== document.documentElement) {
      return;
    }

    this.moveParams = {
      x: event.x - 20,
      y: event.y - 60
    };
  }

  ngOnInit(): void {
  }
}
