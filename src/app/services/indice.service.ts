import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndiceService {
  public indice : Array<object>;
  constructor() { 
    this.indice = [
      {nombre: "Observables",
       ruta: "https://www.google.com"},
      {nombre: "interval y timer",
       ruta: "https://www.fb.com"},
      {nombre: "fromEvent",
       ruta: ""},
      {nombre: "map y filter",
       ruta: ""},
      {nombre: "tap",
       ruta: ""},
      {nombre: "share",
       ruta: ""},
      {nombre: "concat",
       ruta: ""},
      {nombre: "Ciclo del observable (next, error, complete)",
       ruta: ""},
      {nombre: "bufferTime",
       ruta: ""},
      {nombre: "switchMap",
       ruta: ""},
      {nombre: "forkJoin",
       ruta: ""},
      {nombre: "concatMap",
       ruta: ""},
      {nombre: "mergeMap",
       ruta: ""},
      {nombre: "Multiples Observables",
       ruta: ""},
      {nombre: "scan",
       ruta: ""},
      {nombre: "Subject",
       ruta: ""},
      {nombre: "Subject Multicast",
       ruta: ""}
      
    ]
  }
  private getIndice(){
    return this.indice;
  }
}
