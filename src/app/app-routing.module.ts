import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StayPageComponent } from './stays/stay-page/stay-page.component';
import { StaysComponent } from './stays/stays.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:StaysComponent},
  {path:'stay/:id',component:StayPageComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
