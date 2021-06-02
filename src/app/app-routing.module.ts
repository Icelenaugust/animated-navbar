import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YellowComponent } from './yellow/yellow.component';
import { OrangeComponent } from './orange/orange.component';
import { PurpleComponent } from './purple/purple.component';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'yellow', component: YellowComponent },
  { path: 'orange', component: OrangeComponent },
  { path: 'purple', component: PurpleComponent },
  { path: 'blue', component: BlueComponent },
  { path: 'green', component: GreenComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
