import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaprotationComponent } from './maprotation/maprotation.component';
import { PlayerstatsComponent } from './playerstats/playerstats.component';
import { PredatorsComponent } from './predators/predators.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'maprotation', component: MaprotationComponent },
  { path: 'playerstats', component: PlayerstatsComponent },
  { path: 'predators', component: PredatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
