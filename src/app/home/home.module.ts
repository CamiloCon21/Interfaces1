
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-Routing.module';
import { NavbarComponent } from '../navbar/navbar.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
       ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
