import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrihlaskaComponent} from './components/prihlaska/prihlaska.component';
import {ReferenciaComponent} from './components/referencia/referencia.component';
import {ProductsComponent} from "./components/products/products.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'referencie', component: ReferenciaComponent},
  {path: 'prihlaska', component: PrihlaskaComponent},
  {path: 'products', component: ProductsComponent},
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
  ReferenciaComponent,
  PrihlaskaComponent,
  ProductsComponent,
  ProductDetailComponent,
  PageNotFoundComponent
];
