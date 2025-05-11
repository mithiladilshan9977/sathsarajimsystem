import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JimHomeComponent } from './home/jim/jim-home/jim-home.component';
import { MainJimHomeComponent } from './home/jim/main-jim-home.component';
import { PackageRegistrationComponent } from './home/jim/package-registration/package-registration.component';
import { BadmintonComponent } from './home/badminton/badminton.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainJimHomeComponent,
    children: [
      { path: '', component: JimHomeComponent },  
      { path: 'package-registration/:packageid', component: PackageRegistrationComponent },
      { path: 'badminton', component: BadmintonComponent },  

    ]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
