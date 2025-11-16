import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@NgModule({ declarations: [
        AppComponent,
        PokemonComponent,
        PokemonListComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
