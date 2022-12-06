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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItRegisterComponent } from './it-register/it-register.component';
import { ItLoginComponent } from './it-login/it-login.component';
import { RestAPIService } from './restapi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItRegisterComponent,
    ItLoginComponent
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
    HttpClientModule,
  

  ],
  providers: [RestAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
