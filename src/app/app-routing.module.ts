import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleDetailsComponent } from './component/vehicle-details/vehicle-details.component';

const routes: Routes = [
  {
    path:'vehicle/:id',
    component:VehicleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
