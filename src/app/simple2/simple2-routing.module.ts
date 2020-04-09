import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Simple2Component } from './simple2.component';

const routes: Routes = [{ path: '', component: Simple2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Simple2RoutingModule { }
