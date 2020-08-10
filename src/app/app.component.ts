import { Component } from '@angular/core';
import {IndiceService} from '../app/services/indice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IndiceService]
})
export class AppComponent {
  title = 'rxjs';
  public itemIndice: Array<object>
  constructor(public _indices : IndiceService){
    this.itemIndice = _indices.indice;
  }
  
}
