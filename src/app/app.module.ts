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
    PaymentsComponent
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
