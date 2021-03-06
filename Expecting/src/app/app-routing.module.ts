import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { AuthGuard } from './auth/auth.guard';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'food', component: FoodComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
