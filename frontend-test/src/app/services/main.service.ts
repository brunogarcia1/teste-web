import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private readonly api = `http://localhost:3000/produto`
  private readonly apiStore = `http://localhost:3000/product-store`
  constructor(private http: HttpClient) { }

  pesquisarProdutos(page: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(`${this.api}`, { params });
  }

  pesquisarProdutoLoja(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiStore}/${id}`)
  }

  pesquisarProduto(codigo: number): Observable<any> {
    const urlSistemas = `${this.api}/${codigo}`
    return this.http.get<any>(urlSistemas);
  }
}
