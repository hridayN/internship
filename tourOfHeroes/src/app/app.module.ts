import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { GlobalService } from 'src/services/global.service';
import { HeroService } from 'src/services/hero.service';
import { ChildComponent } from './child/child.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { FormBasicsComponent } from './form-basics/form-basics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ChildComponent,
    HeroDetailsComponent,
    FormBasicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GlobalService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
