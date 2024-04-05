import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PhoneComponent } from './phone/phone.component';
import { HomeComponent } from './home/home.component';
import { DateComponent } from './date/date.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    HomeComponent,
    DateComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMenuModule,
    MatExpansionModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { 










  
}
