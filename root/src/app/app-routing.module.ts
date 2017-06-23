import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BidsComponent } from './bids/bids.component';
import { ResultsComponent} from './bids/results/results.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [],
    component: LoginComponent // ==> <<app-login></app-login>
  },
  {
    path: 'bids',
    children: [],
    component: BidsComponent
  },
  {
    path: 'results',
    children: [],
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
