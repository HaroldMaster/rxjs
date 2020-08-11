import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesComponent } from './components/observables/observables.component';
import { IntervalytimerComponent } from './components/intervalytimer/intervalytimer.component';
import { IndiceComponent } from './components/indice/indice.component'

const routes: Routes = [
  {path: "observable", component: ObservablesComponent},
  {path: "intervalytimer", component: IntervalytimerComponent},
  {path: "indice", component: IndiceComponent},
  {path: "**", component: IndiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
