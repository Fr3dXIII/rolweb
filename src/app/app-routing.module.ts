import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ConflictosComponent } from './pages/conflictos/conflictos.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DosciudadesComponent } from './pages/dosciudades/dosciudades.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'    
  },
  {
    path: 'conflictos',
    component: ConflictosComponent    
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'dosciudades',
    component: DosciudadesComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
