import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { GetStartedComponent } from '../get-started/get-started.component';
import { PoolBlocksComponent } from '../pool-blocks/pool-blocks.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'getting_started', component: GetStartedComponent },
  { path: 'blocks/pool', component: PoolBlocksComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {

}
