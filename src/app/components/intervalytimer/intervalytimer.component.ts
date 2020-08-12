import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, timer, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-intervalytimer',
  templateUrl: './intervalytimer.component.html',
  styleUrls: ['./intervalytimer.component.scss'],
})
export class IntervalytimerComponent implements OnInit {
  public contador: any;
  public tiempo: any;
  public aux: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor() {
    this.aux = true;
    //this.tiempo = timer(12000);
    this.contador = interval(1000).pipe(takeUntil(this.contador = timer(12000)));
  }

  ngOnInit(): void {}

  interval() {
    this.aux = false;
    this.contador.subscribe((n) => {
      let resultado = document.querySelector("#resultado");
      let msg1 = document.createElement("p");
      msg1.innerHTML=n;
      resultado.appendChild(msg1);
      console.log(n);
      if (n == 10) {
        msg1.innerHTML="Se acabo";
      }
    });
  }
}
