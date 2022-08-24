import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { HttpClientModule } from '@angular/common/http';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { AvisoPrivacidadComponent } from './components/aviso-privacidad/aviso-privacidad.component';
import { GraciasComponent } from './components/gracias/gracias.component';

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
    ContactoComponent,
    AvisoPrivacidadComponent,
    GraciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
