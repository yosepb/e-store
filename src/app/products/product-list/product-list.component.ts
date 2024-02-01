import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements AfterViewInit {
  // myText: any;
  // isLiked: any;

  // title = 'bahtiar';
  // onClick() {
  //   this.title = 'tombol sudah diklik, text berubah';
  // }

  // selectedProduct = 'Microphone';

  @ViewChild(ProductDetailComponent)
  productDetail: ProductDetailComponent = new ProductDetailComponent();

  selectedProduct = '';

  onBuy() {
    if (this.selectedProduct === '') {
      window.alert(`Anda belum menekan pilihan barang`);
    } else {
      window.alert(`You just bought ${this.selectedProduct}!`);
    }
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log('productDetail.names: ' + this.productDetail.names);
    }
  }
}
