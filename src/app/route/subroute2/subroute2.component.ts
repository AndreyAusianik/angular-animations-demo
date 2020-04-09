import {Component, HostBinding, OnInit} from '@angular/core';
import {animate, animateChild, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  templateUrl: './subroute2.component.html',
  styleUrls: ['./subroute2.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('void', style({transform: 'translateY(-100%)'})),
      state('*', style({transform: 'translateY(0)'})),
      transition('void <=> *', animate('20000ms ease-in-out'))
    ]),
    trigger('pageAnimations', [
      transition(':enter', [
        query('@*', animateChild({ duration: '1000ms' }))
      ]),
      transition(':leave', [
        query('@*', animateChild({ duration: '1000ms' }))
      ]),
    ])
  ]
})
export class Subroute2Component implements OnInit {

  @HostBinding('@pageAnimations') animatePage = true;

  constructor() { }

  ngOnInit(): void {
  }

}
