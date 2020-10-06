import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './views/overview/overview.component';
import {DetailsComponent} from './views/details/details.component';
import {SocialloginComponent} from './views/sociallogin/sociallogin.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'login', component: SocialloginComponent },
  { path: '',   redirectTo: '/overview', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
