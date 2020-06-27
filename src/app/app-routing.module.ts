import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
