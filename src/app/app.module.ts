import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { StatusComponent } from './status/status.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CaculatorComponent,
    NavigatorComponent,
    StatusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [DataService],
  bootstrap: [AppComponent, NavigatorComponent, FooterComponent]
})
export class AppModule { }
