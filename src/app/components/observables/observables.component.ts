import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit {
  public observable: Observable<any>;
  constructor() {
    this.observable = Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 5000);
    });
  }
  ngOnInit(): void {}

  observableFunction() {
    let contenedor = document.querySelector("#resultado");
    let msg1 = document.createElement("p");
    msg1.innerHTML='Antes de la suscripción';
    contenedor.appendChild(msg1);
    
    this.observable.subscribe({
      next(x) {
        let msg2 = document.createElement("p");
        msg2.innerHTML='Se obtiene el valor '+x;
        contenedor.appendChild(msg2);
      },
      error(err) {
        let msg3 = document.createElement("p");
        msg3.innerHTML='Ocurrio un error '+err;
        contenedor.appendChild(msg3);
      },
      complete() {
        let msg4 = document.createElement("p");
        msg4.innerHTML='Se ha completado';
        contenedor.appendChild(msg4);
      },
    });
    let msg5 = document.createElement("p");
        msg5.innerHTML='Después de la suscripción';
        contenedor.appendChild(msg5);
  }
}
