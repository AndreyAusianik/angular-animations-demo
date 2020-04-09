import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteComponent } from './route.component';
import {Subroute1Component} from './subroute1/subroute1.component';
import {Subroute2Component} from './subroute2/subroute2.component';

const routes: Routes = [{ path: '', component: RouteComponent, children: [
    {path: '', redirectTo: 'main'},
    {path: 'main', component: Subroute1Component, data: {route: 'main'}},
    {path: 'single', component: Subroute2Component, data: {route: 'single'}},
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
