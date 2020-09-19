import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageOngsComponent } from './components/page-ongs/page-ongs.component';

const routes: Routes = [{

  path: '',
  component: MainMenuComponent,
  children: [
    {
      path: 'Ongs',
      component: PageOngsComponent,
    }],

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
