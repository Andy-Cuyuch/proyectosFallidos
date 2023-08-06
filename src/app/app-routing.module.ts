import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectsComponent } from './component/proyects/proyects.component';
import { UserContactComponent } from './component/user-contact/user-contact.component';
import { ProfilePrincipalComponent } from './component/profile-principal/profile-principal.component';
import { PrincipalComponent } from './component/principal/principal.component';

const routes: Routes = [
  {path: "", component: PrincipalComponent},
  {path: "Principal",component:PrincipalComponent},
  {path: "Proyectos", component: ProyectsComponent},
  {path: "Contacto", component: UserContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
