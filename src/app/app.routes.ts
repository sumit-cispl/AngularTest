import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [

 { path: 'home' , component: HomeComponent },
 { path: 'shop', component: ShopComponent },
 { path: 'about', component: AboutComponent },
 { path: 'product', component: ProductComponent}

]; 
