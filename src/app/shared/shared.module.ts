import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from "src/app/app-routing.module";



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // AppRoutingModule
],
  exports: [
    NavbarComponent
  ],
})
export class SharedModule { }
