
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageOngsComponent } from './components/page-ongs/page-ongs.component';
import { CardOngsComponent } from './components/card-ongs/card-ongs.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MainWindowComponent } from './components/main-window/main-window.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CardEmpressComponent } from './components/card-empress/card-empress.component';
import { PageEmpressComponent } from './components/page-empress/page-empress.component';
import { VoluntaryComponent } from './components/voluntary/voluntary.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { OngsCadastroComponent } from './components/ongs-cadastro/ongs-cadastro.component';
<<<<<<< HEAD
import {MatInputModule} from '@angular/material/input';
=======
import { FormularioComponent } from './clientes/formulario/formulario.component';
import { PageContatoComponent } from './components/page-contato/page-contato.component';


>>>>>>> c54da98dbaeba2a99e32614fe2a6e66e599abef9

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PageOngsComponent,
    CardOngsComponent,
    MainWindowComponent,
    CardEmpressComponent,
    PageEmpressComponent,
<<<<<<< HEAD
    VoluntaryComponent,
    OngsCadastroComponent
=======
    OngsCadastroComponent,
    FormularioComponent,
    PageContatoComponent
>>>>>>> c54da98dbaeba2a99e32614fe2a6e66e599abef9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    MatInputModule
=======
>>>>>>> c54da98dbaeba2a99e32614fe2a6e66e599abef9
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
