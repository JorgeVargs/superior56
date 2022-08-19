import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderComponent } from './components/header/header/header.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';

// extras

import { SwiperModule } from 'swiper/angular';
import { DeptoMuestraComponent } from './components/depto-muestra/depto-muestra.component';
import { PrototiposComponent } from './components/prototipos/prototipos.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    HeaderComponent,
    ProyectoComponent,
    DepartamentosComponent,
    DeptoMuestraComponent,
    PrototiposComponent,
    UbicacionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
