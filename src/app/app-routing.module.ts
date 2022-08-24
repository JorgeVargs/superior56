import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoPrivacidadComponent } from './components/aviso-privacidad/aviso-privacidad.component';
import { GraciasComponent } from './components/gracias/gracias.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'aviso-de-privacidad',component: AvisoPrivacidadComponent},
  {path: 'gracias',component: GraciasComponent},
  { path: '**', pathMatch:'full',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
