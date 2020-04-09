import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaggerRoutingModule } from './stagger-routing.module';
import { StaggerComponent } from './stagger.component';


@NgModule({
  declarations: [StaggerComponent],
  imports: [
    CommonModule,
    StaggerRoutingModule
  ]
})
export class StaggerModule { }
