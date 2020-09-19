
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

import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { ReactiveFormsModule } from '@angular/forms';

import { OngsCadastroComponent } from './components/ongs-cadastro/ongs-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PageOngsComponent,
    CardOngsComponent,
    MainWindowComponent,
    CardEmpressComponent,
    PageEmpressComponent,
    OngsCadastroComponent
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
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
