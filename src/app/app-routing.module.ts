import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path:'', canActivate: [AuthGuard], component: ProfileComponent, pathMatch: 'full'},
  { path: 'registro', component: RegistroComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
