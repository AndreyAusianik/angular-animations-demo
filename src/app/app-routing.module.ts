import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'simple', pathMatch: 'full'},
  { path: 'simple', loadChildren: () => import('./simple/simple.module').then(m => m.SimpleModule) },
  { path: 'route', loadChildren: () => import('./route/route.module').then(m => m.RouteModule) },
  { path: 'simple2', loadChildren: () => import('./simple2/simple2.module').then(m => m.Simple2Module) },
  { path: 'stagger', loadChildren: () => import('./stagger/stagger.module').then(m => m.StaggerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
