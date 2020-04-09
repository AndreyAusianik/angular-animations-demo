import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-simple2',
  templateUrl: './simple2.component.html',
  styleUrls: ['./simple2.component.scss'],
  animations: [
    trigger('expandableVertically', [
      state('void', style({height: '0'})),
      state('*', style({height: '*'})),
      transition('void <=> *',
        animate('500ms')
      )
    ])
  ]
})
export class Simple2Component implements OnInit {
  expanded = false;
  constructor() { }

  ngOnInit(): void {
  }

}
