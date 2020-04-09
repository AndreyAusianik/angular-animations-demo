import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Simple2RoutingModule } from './simple2-routing.module';
import { Simple2Component } from './simple2.component';


@NgModule({
  declarations: [Simple2Component],
  imports: [
    CommonModule,
    Simple2RoutingModule
  ]
})
export class Simple2Module { }
