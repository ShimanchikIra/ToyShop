import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutShopComponent } from './main/about-shop/about-shop.component';
import { CatalogComponent } from './main/catalog/catalog.component';

const appRoutes: Routes = [
  { path: '', component: AboutShopComponent},
  { path: 'catalog', component: CatalogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutShopComponent,
    CatalogComponent
  ],
  imports: [
    // BrowserModule,
    // RouterModule,
    // BrowserAnimationsModule
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
