import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JimHomeComponent } from './home/jim/jim-home/jim-home.component';
import { RouterModule } from '@angular/router';
import { MainJimHomeComponent } from './home/jim/main-jim-home.component';

@NgModule({
  declarations: [
    AppComponent,
    JimHomeComponent,
    MainJimHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
