import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrnComponent } from './urn/urn.component';

const routes: Routes = [
  { path: '', component: UrnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
