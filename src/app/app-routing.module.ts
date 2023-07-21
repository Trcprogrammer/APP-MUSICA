import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { MusicaComponent } from './components/musica/musica.component';

const routes: Routes = [

  {path:'inicio', component:InicioComponent},
  {path:'informacion', component:InformacionComponent},
  {path: 'musica',component:MusicaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
