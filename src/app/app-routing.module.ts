import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './views/overview/overview.component';
import {DetailsComponent} from './views/details/details.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
