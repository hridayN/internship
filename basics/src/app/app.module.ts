import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogParentComponent } from './components/dialog-parent/dialog-parent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DialogParentComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule, // Declare this import before BrowserModule in the list, Run npm install @angular/animations@latest --save
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // STEP-1
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserComponent]
})
export class AppModule { }
