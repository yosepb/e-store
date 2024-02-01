import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [CommonModule],
  // ini akan membuat komponen terekspos lewat API,
  // karena angular module menggunakan public API
  // utk komunikasi antar modul dalam aplikasi
  exports: [ProductListComponent],
})
export class ProductsModule {}
