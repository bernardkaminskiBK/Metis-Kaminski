import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {PrihlaskaComponent} from './components/prihlaska/prihlaska.component';
import {ReferenciaComponent} from './components/referencia/referencia.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProfilComponent} from './components/profil/profil.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'referencie', component: ReferenciaComponent},
  {path: 'prihlaska', component: PrihlaskaComponent},
  {
    path: 'products',
    loadChildren: () => import('./components/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'statistics',
    loadChildren: () => import('./components/statistics/statistics.module').then((m) => m.StatisticsModule),
  },
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: '404notFound', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

export const routingComponents = [
  WelcomeComponent,
  ProfilComponent,
  ReferenciaComponent,
  PrihlaskaComponent,
  ShoppingCartComponent,
  PageNotFoundComponent
];
