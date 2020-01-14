import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [ProductsService]
})


export class CatalogComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
