import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'e-store';
  today = new Date();

  ngOnDestroy(): void {
    console.log('komponen app destroyed');
  }
}
