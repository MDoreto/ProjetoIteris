import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { OngsCadastroComponent } from './components/ongs-cadastro/ongs-cadastro.component';
import { PageEmpressComponent } from './components/page-empress/page-empress.component';
import { PageOngsComponent } from './components/page-ongs/page-ongs.component';
import { VoluntaryComponent } from './components/voluntary/voluntary.component';
import { FormularioComponent } from './clientes/formulario/formulario.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [{

  path: '',
  component: MainMenuComponent,

  children: [
    {
      path:'',
      component:MainWindowComponent,
    },
    {
      path: 'Ongs',
      component: PageOngsComponent,
    },
    {
      path:'Empress',
      component:PageEmpressComponent,
    },
    {
      path:'Voluntary',
      component:VoluntaryComponent,
    },
    {
      path:'Register',
      component:OngsCadastroComponent,
    },
    {
      path:'Contato',
      component:ContactComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
