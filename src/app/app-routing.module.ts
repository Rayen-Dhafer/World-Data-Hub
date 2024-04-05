import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { DateComponent } from './date/date.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { PhoneComponent } from './phone/phone.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "phone",
    component: PhoneComponent
  },

  {
    path: "date",
    component: DateComponent
  },
  {
    path: "info",
    component: InfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
