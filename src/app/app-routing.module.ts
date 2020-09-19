import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { PageOngsComponent } from './components/page-ongs/page-ongs.component';

const routes: Routes = [{

  path: '',
  component: MainMenuComponent,

  children: [
    {
      path: 'Ongs',
      component: PageOngsComponent,
    },
    {
      path:'',
      component:MainWindowComponent,
    }
  ],

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
