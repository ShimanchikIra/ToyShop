import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutShopComponent } from './main/about-shop/about-shop.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import {ConfigService} from './config.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LogService} from './log.service';
import { ProductCardComponent } from './main/catalog/product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CatalogComponent,
    ProductCardComponent
  ],
  imports: [
    // BrowserModule,
    // RouterModule,
    // BrowserAnimationsModule
    FormsModule, HttpClientModule,
    BrowserModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [ConfigService, LogService]
})
export class AppModule { }
