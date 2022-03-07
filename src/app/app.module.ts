import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'animate.css';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';

@NgModule({
  declarations: [AppComponent, AboutMeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
