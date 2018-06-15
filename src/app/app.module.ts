import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { StatusComponent } from './status/status.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent, DocCookies } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { PoolBlocksComponent } from './pool-blocks/pool-blocks.component';
import { PaymentsComponent } from './payments/payments.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { NetworksComponent } from './networks/networks.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { MonitoringComponent } from './admin/monitoring/monitoring.component';
import { UserslistComponent } from './admin/userslist/userslist.component';
import { AdminNavigatorComponent } from './admin/admin-navigator/admin-navigator.component';



@NgModule({
  declarations: [
    AppComponent,
    CaculatorComponent,
    NavigatorComponent,
    StatusComponent,
    FooterComponent,
    UserComponent,
    HomeComponent,
    GetStartedComponent,
    PoolBlocksComponent,
    PaymentsComponent,
    BlockchainComponent,
    NetworksComponent,
    ContactComponent,
    AdminComponent,
    StatisticsComponent,
    MonitoringComponent,
    UserslistComponent,
    AdminNavigatorComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [DataService, DocCookies],
  bootstrap: [AppComponent, NavigatorComponent, FooterComponent]
})
export class AppModule { }
