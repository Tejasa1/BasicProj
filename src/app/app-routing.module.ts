import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { RegisterComponent } from './register/register.component';
import { TestingComponent } from './testing/testing.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const routes: Routes = [

{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'display', component:DisplayComponent},
{path:'OWB', component:OneWayBindingComponent},
{path:'TWB', component:TwoWayBindingComponent},
{path:'testing', component:TestingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
