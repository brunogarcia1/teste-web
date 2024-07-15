import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface FormField {
  id: string;
  label: string;
  type: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  filterOption: string = 'ativos';
  totalRecords: number = 0;
  pageIndex: number = 0;
  pageSize: number = 10;
  products: any[] = [];
  productCode: string = '';
  description: string = '';
  barcode: string = '';
  cost: number | null = null;
  productStoreDetails: { [key: number]: any } = {};

  formFields: FormField[] = [
    { id: 'productCode', label: 'Código', type: 'text' },
    { id: 'description', label: 'Descrição', type: 'text' },
    { id: 'barcode', label: 'Código de Barras', type: 'text' },
    { id: 'cost', label: 'Custo', type: 'number' }
  ];

  constructor(
    private mainService: MainService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pesquisarProdutos();
  }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | undefined;

  pesquisarProdutos(): void {
    this.mainService.pesquisarProdutos(this.pageIndex + 1, this.pageSize)
      .subscribe(response => {
        this.products = response.data;
        this.totalRecords = response.total;
      });
  }

  pesquisarProduto(consulta: any): void {
    this.mainService.pesquisarProduto(consulta)
      .subscribe(response => {
        this.products = response.data;
      });
  }

  handlePageEvent(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.pesquisarProdutos();
  }

  abrirPainel(item: any) {
    this.pageIndex = 0;
    this.router.navigate([`productstore`]);

  }
}