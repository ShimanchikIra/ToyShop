import { Injectable } from '@angular/core';
import {Config} from '../../../config';
import {ConfigService} from '../../config.service';
import { Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Product} from '../../../product';
import {LogService} from '../../log.service';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private products: Product[] = [{
    id: 1,
    imgUrl: 'assets/img_for_product/prod1.jpg',
    name: 'Bob',
    price: 28,
    description: 'jjj',
    amount: 1,
    available: null
  },
    {
    id: 1,
      imgUrl: 'assets/img_for_product/prod1.jpg',
    name: 'Bob',
    price: 28,
      description: 'jjj',
      amount: 1,
      available: null
  },
    {
    id: 1,
      imgUrl: 'assets/img_for_product/prod1.jpg',
    name: 'Bob',
    price: 28,
      description: 'jjj',
      amount: 1,
      available: null
  },

    {
      id: 1,
      imgUrl: 'assets/img_for_product/prod1.jpg',
      name: 'Bob',
      price: 28,
      description: 'jjj',
      amount: 1,
      available: null
    }];




  constructor(private configService: ConfigService, private http: HttpClient) {

  }

  getProducts(): Product[] {
    return this.products;
  }

  // getProducts(): Observable<HttpResponse<Product[]>> {
  //   return this.http.get<Product[]>(
  //     'assets/products.json' , { observe: 'response' });
  // }

}
