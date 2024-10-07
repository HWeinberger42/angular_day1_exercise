import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OffersComponent } from './offers/offers.component';
import { HomeAboutComponent } from './home-about/home-about.component';

@NgModule({
  declarations: [
    AppComponent,
    BarNavComponent,
    HomeComponent,
    AboutComponent,
    OffersComponent,
    HomeAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
