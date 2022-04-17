import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrihlaskaComponent} from './components/prihlaska/prihlaska.component';
import {ReferenciaComponent} from './components/referencia/referencia.component';
import {ProductsComponent} from "./components/products/products.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ProfilComponent} from "./components/profil/profil.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'referencie', component: ReferenciaComponent},
  {path: 'prihlaska', component: PrihlaskaComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', loadChildren: () => import('./components/statistics/statistics.module').then(m => m.StatisticsModule)},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

export const routingComponents = [
  WelcomeComponent,
  ProfilComponent,
  ReferenciaComponent,
  PrihlaskaComponent,
  ProductsComponent,
  ProductDetailComponent,
  PageNotFoundComponent
];
