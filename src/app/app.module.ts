import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';
import { ErrorAlertComponent } from './components/shared/error-alert/error-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoImagePipe,
    CardsComponent,
    LoadingComponent,
    SecureDomPipe,
    ErrorAlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
