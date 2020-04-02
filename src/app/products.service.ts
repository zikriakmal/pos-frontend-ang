import { Injectable } from '@angular/core';
import { Observable } from  'rxjs';
import { Product} from './Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  PHP_API_SERVER = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }
  createData(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.PHP_API_SERVER}/api/test`, product);
  }

}
