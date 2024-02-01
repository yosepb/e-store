import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // myText: any;
  // isLiked: any;

  // title = 'bahtiar';
  // onClick() {
  //   this.title = 'tombol sudah diklik, text berubah';
  // }

  selectedProduct = 'Microphone';

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct}!`);
  }
}
