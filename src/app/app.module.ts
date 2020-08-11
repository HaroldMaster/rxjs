import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { IntervalytimerComponent } from './components/intervalytimer/intervalytimer.component';
import { IndiceComponent } from './components/indice/indice.component';
import { VolverComponent } from './components/volver/volver.component';


@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    IntervalytimerComponent,
    IndiceComponent,
    VolverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
