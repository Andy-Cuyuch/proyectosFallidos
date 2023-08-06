import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfilePrincipalComponent } from './component/profile-principal/profile-principal.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProyectsComponent } from './component/proyects/proyects.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { UserContactComponent } from './component/user-contact/user-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ProfilePrincipalComponent,
    FooterComponent,
    ProyectsComponent,
    PrincipalComponent,
    UserContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
