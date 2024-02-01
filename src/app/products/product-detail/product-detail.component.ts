import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();

  buy() {
    this.bought.emit(this.name);
  }

  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }

  ngOnInit(): void {
    console.log(`Name is ${this.name} in the ngOnInit`);
  }

  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }
}
