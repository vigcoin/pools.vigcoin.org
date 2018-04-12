import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { GetStartedComponent } from '../get-started/get-started.component';
import { PoolBlocksComponent } from '../pool-blocks/pool-blocks.component';
import { PaymentsComponent } from '../payments/payments.component';
import { BlockchainComponent } from '../blockchain/blockchain.component';
import { NetworksComponent } from '../networks/networks.component';
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'getting_started', component: GetStartedComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'blocks/pool', component: PoolBlocksComponent },
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'networks', component: NetworksComponent },
  { path: 'contact', component: ContactComponent }
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
