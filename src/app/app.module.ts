import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ConflictosComponent } from './pages/conflictos/conflictos.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DosciudadesComponent } from './pages/dosciudades/dosciudades.component';

@NgModule({
  declarations: [
    AppComponent,
    ConflictosComponent,
    SidebarComponent,
    HomeComponent,
    PersonajesComponent,
    ProductosComponent,
    DosciudadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
