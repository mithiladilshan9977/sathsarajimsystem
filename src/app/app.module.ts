import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JimHomeComponent } from './home/jim/jim-home/jim-home.component';
import { RouterModule } from '@angular/router';
import { MainJimHomeComponent } from './home/jim/main-jim-home.component';
import { HeaderComponent } from './widgets/header/header.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { PackageRegistrationComponent } from './home/jim/package-registration/package-registration.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MainAuthComponent } from './auth/main-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JimHomeComponent,
    MainJimHomeComponent,
    HeaderComponent,
    FooterComponent,
    PackageRegistrationComponent,
    SignUpComponent ,
    MainAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
