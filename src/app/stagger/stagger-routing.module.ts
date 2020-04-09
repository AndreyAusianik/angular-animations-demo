import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaggerComponent } from './stagger.component';

const routes: Routes = [{ path: '', component: StaggerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaggerRoutingModule { }
