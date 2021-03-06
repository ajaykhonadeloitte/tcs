import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ProgramsComponent } from './programs/programs.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { RulesComponent } from './rules/rules.component';
import { ContactComponent } from './contact/contact.component';
import { BmmComponent } from './bmm/bmm.component';
// import { SmoothScrollToDirective, SmoothScrollDirective } from '../../node_modules/ng2-smooth-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    AboutComponent,
    ProgramsComponent,
    FacilitiesComponent,
    RulesComponent,
    ContactComponent,
    BmmComponent
    // SmoothScrollToDirective,
    // SmoothScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
