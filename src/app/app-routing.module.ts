import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ManageRailroadComponent } from './pages/manage-railroad/manage-railroad.component';
import { ManageTripsComponent } from './pages/manage-trips/manage-trips.component';
import { PlanTransportComponent } from './pages/plan-transport/plan-transport.component';

const routes: Routes = [
  { path: 'manage-railroad', component: ManageRailroadComponent },
  { path: 'manage-trips', component: ManageTripsComponent },
  { path: 'plan-transport', component: PlanTransportComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
