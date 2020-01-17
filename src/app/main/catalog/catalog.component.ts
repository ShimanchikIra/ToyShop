import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';
import {Product} from '../../../product';
import {ConfigService} from '../../config.service';
import {LogService} from '../../log.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [ProductsService, ConfigService, LogService]
})


export class CatalogComponent implements OnInit {
  products: Product[] = [];
  status: number;



  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  // getProducts() {
  //   this.productsService.getProducts().subscribe(resp => {
  //     this.status = resp.status;
  //     this.products = {  ...resp.body['productList'] };
  //   });
  // }

}
