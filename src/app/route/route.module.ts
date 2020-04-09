import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { RouteComponent } from './route.component';
import { Subroute1Component } from './subroute1/subroute1.component';
import { Subroute2Component } from './subroute2/subroute2.component';


@NgModule({
  declarations: [RouteComponent, Subroute1Component, Subroute2Component],
  imports: [
    CommonModule,
    RouteRoutingModule
  ]
})
export class RouteModule { }
