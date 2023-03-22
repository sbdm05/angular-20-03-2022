import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-demo-observable-froid',
  templateUrl: './page-demo-observable-froid.component.html',
  styleUrls: ['./page-demo-observable-froid.component.scss'],
})
export class PageDemoObservableFroidComponent {
  // créer un observable
  observable = new Observable((observer) => {
    // ici on envoie des informations
    observer.next(1);
    observer.next(2);
    observer.next(Math.random());
  });

  constructor() {
    console.log('depuis page demo');

    // déclencher l'observable
    this.observable.subscribe((data) => {
      console.log(data, 'depuis observer');
    });

    // deuxième observer
    this.observable.subscribe((data) => {
      console.log(data, 'deuxième observer');
    });
  }
}
