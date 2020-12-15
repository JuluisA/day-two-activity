import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { HomeComponent } from './content/home/home.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { ProductListComponent } from './content/shop/product-list/product-list.component';
import { ProductViewComponent } from './content/shop/product-view/product-view.component';
import { ShopComponent } from './content/shop/shop.component';
import { OneColumnComponent } from './one-column/one-column.component';
import { TwoColumnComponent } from './two-column/two-column.component';

const routes: Routes = [
  { path: '', component: TwoColumnComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'shop', component: ShopComponent, children: [
        { path: '', component: ProductListComponent },
        { path: 'product/:id/view', component: ProductViewComponent },
        { path: '**', redirectTo: 'not-found' }
      ]
    },
   ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: OneColumnComponent, children: [
      { path: '', component: NotFoundComponent },
    ]
  }, // Not Found Page
  { path: '**', redirectTo: 'not-found' } // wild card - must be last on the list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
