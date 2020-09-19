import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { PageEmpressComponent } from './components/page-empress/page-empress.component';
import { PageOngsComponent } from './components/page-ongs/page-ongs.component';
import { FormularioComponent } from './clientes/formulario/formulario.component';

const routes: Routes = [{

  path: '',
  component: MainMenuComponent,

  children: [
    {
      path: 'Ongs',
      component: PageOngsComponent,
    },
    {
      path:'Empress',
      component:PageEmpressComponent,
    },
    {
      path:'Contato',
      component:FormularioComponent,
    }
  ],

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
