import { LoginComponent } from './pages/login/login.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './cart/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'account/template/:id', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule],
} )
export class AppRoutingModule { }
