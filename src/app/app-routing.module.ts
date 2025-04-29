import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JimHomeComponent } from './home/jim/jim-home/jim-home.component';
import { MainJimHomeComponent } from './home/jim/main-jim-home.component';

const routes: Routes = [
  {
    path: '',
    component: JimHomeComponent,
    children: [
      {
        path: '',
        component: MainJimHomeComponent
      },
      
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
