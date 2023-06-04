import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpsonComponent } from './simpson/simpson.component';
import { NasaComponent } from './nasa/nasa.component';

const routes: Routes = [
  {path:"nasa", component:NasaComponent},
  {path:"simpson", component:SimpsonComponent},
  {path:"**",component:NasaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
