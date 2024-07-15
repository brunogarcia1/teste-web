import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private readonly api = 'http://localhost:3000/product-store'

  constructor(private http: HttpClient) { }

  pesquisarProdutoStore(id: number): Observable<any> {

    const url = `${this.api}/${id}`
    return this.http.get<any>(url)
  }
}
