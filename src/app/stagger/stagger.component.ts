import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, AnimationBuilder, AnimationPlayer, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-stagger',
  templateUrl: './stagger.component.html',
  styleUrls: ['./stagger.component.scss'],
  animations: [
    trigger('flowIn', [
      transition('* <=> *', [
        query(':enter',  [
          style({transform: 'translateX(-80px)', opacity: 0}),
          stagger('-50ms', animate('300ms')) // minus inverses order
        ], {optional: true})
      ])
    ])
  ]
})
export class StaggerComponent implements AfterViewInit {
  grid = Array(24).fill(0).map(() => ({
    color: '#' + Array(6).fill(0).map(_ => Math.floor(Math.random() * 12).toString(16)).join('')
  }));

  @ViewChild('gridElement', {static: false}) private gridElement: ElementRef;
  constructor(private animationBuilder: AnimationBuilder) {}

  player: AnimationPlayer;
  ngAfterViewInit() {
    const animation = this.animationBuilder.build([
      query('*',  [
        style({transform: 'translateX(-80px)', opacity: 0}),
        stagger('50ms', animate('300ms', style({transform: 'translateX(0)', opacity: 1})))
      ])
    ]);

    this.player = animation.create(this.gridElement.nativeElement);
  }

  runAnimation() {
    this.player.play();
  }

  pauseAnimation() {
    this.player.pause();
  }

  moveToAnimationPoint(value) {
    this.player.setPosition(value / 100);
  }
}
