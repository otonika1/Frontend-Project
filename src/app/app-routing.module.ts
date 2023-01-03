import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginGuard } from './guard/login.guard';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: '',pathMatch: 'full',redirectTo: 'auth'},
  {path:'auth',component:AuthComponent},
  {path:'info',component:InfoComponent,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
