import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import{TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { MessagesModule } from 'primeng/messages';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItRegisterComponent } from './it-register/it-register.component';
import { ItLoginComponent } from './it-login/it-login.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AssetPurchasedEntryComponent } from './asset-purchased-entry/asset-purchased-entry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestAPIService } from './restapi.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductMasterComponent } from './master/product-master/product-master.component';
import { SpecificationMasterComponent } from './master/specification-master/specification-master.component';
import { BrandMasterComponent } from './master/brand-master/brand-master.component';
import { ManageAssetEntryComponent } from './manage-asset-entry/manage-asset-entry/manage-asset-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ItRegisterComponent,
    ItLoginComponent,
    HeaderComponent,
    MenuComponent,
    AssetPurchasedEntryComponent,
    DashboardComponent,
    ProductMasterComponent,
    SpecificationMasterComponent,
    BrandMasterComponent,
    ManageAssetEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    SidebarModule,
    PanelMenuModule,
    MenuModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    MessagesModule
  

  ],
  providers: [RestAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
