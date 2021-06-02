import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { YellowComponent } from './yellow/yellow.component';
import { OrangeComponent } from './orange/orange.component';
import { PurpleComponent } from './purple/purple.component';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    YellowComponent,
    OrangeComponent,
    PurpleComponent,
    BlueComponent,
    GreenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
