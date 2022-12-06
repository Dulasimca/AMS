import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItLoginComponent } from './it-login/it-login.component';
import { ItRegisterComponent } from './it-register/it-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/it-login', pathMatch: 'full' },
  { path:'it-register',component:ItRegisterComponent},
  { path:'it-login',component:ItLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
