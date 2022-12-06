import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetPurchasedEntryComponent } from './asset-purchased-entry/asset-purchased-entry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ItLoginComponent } from './it-login/it-login.component';
import { ItRegisterComponent } from './it-register/it-register.component';
import { ManageAssetComponent } from './manage-asset/manage-asset.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/it-login', pathMatch: 'full' },
  { path:'it-register',component:ItRegisterComponent},
  { path:'it-login',component:ItLoginComponent},
  { path:'header',component:HeaderComponent},
  { path:'menu',component:MenuComponent},
  { path:'manage-asset',component:ManageAssetComponent},
  { path:'asset-purchased-entry',component:AssetPurchasedEntryComponent},
  { path:'dashboard',component:DashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
