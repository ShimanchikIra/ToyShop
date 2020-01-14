import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutShopComponent } from './main/about-shop/about-shop.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import {MatCardModule} from '@angular/material';
import {ConfigService} from './config.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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
    FormsModule, HttpClientModule,
    BrowserModule, RouterModule.forRoot(appRoutes), MatCardModule
  ],
  bootstrap: [AppComponent],
  providers: [ConfigService]
})
export class AppModule { }
