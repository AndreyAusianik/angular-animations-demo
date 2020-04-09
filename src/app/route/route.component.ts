import { Component, OnInit } from '@angular/core';
import {animateChild, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('main <=> single', [
        query(':leave', [
          style({position: 'absolute', top: 0, left: 0, right: 0}),
          animateChild()
        ], {optional: true}),
        query(':enter', [
          style({position: 'absolute', top: 0, left: 0, right: 0}),
          animateChild()
        ])
      ])
    ])
  ]
})
export class RouteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
