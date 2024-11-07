/* import { Routes } from '@angular/router';

export const routes: Routes = [];
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MarcasComponent } from './marcas/marcas.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'marcas', component: MarcasComponent },
  { path: 'contacto', component: ContactoComponent },
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/