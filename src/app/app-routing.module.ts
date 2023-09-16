import { LoginComponent } from './pages/login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './cart/cart/cart.component';
import { TemplateDetailsComponent } from './pages/template-details/template-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'account/template/:id', component: HomeComponent },
  { path: 'account/variation/:id', component: TemplateDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
} )
export class AppRoutingModule { }
