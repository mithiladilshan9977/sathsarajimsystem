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

@NgModule({
  declarations: [
    AppComponent,
    JimHomeComponent,
    MainJimHomeComponent,
    HeaderComponent,
    FooterComponent,
    PackageRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
