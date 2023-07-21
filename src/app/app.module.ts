import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { MusicaComponent } from './components/musica/musica.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CuerpoComponent,
    InicioComponent,
    InformacionComponent,
    MusicaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
