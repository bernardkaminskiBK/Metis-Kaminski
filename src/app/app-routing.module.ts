import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrihlaskaComponent } from './components/prihlaska/prihlaska.component';
import { ReferenciaComponent } from './components/referencia/referencia.component';

const routes: Routes = [
  { path: 'referencie', component: ReferenciaComponent },
  { path: 'prihlaska', component: PrihlaskaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [ReferenciaComponent, PrihlaskaComponent];
