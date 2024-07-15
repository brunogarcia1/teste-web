import { Component } from '@angular/core';
import { ProductStoreDTO } from 'src/app/interfaces/product-store.dto';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent {

  data: ProductStoreDTO[] = [{
    idProduto: 0,
    descricao: '',
    codigoBarras: '',
    quantidadeEmbalagem: 0,
    custo: 0,
    precoVenda: 1,
    idLoja: 0,
  }]

}
