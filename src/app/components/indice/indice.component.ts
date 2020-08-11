import { Component, OnInit } from '@angular/core';
import {IndiceService} from '../../services/indice.service'

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss'],
  providers: [IndiceService]
})
export class IndiceComponent implements OnInit {

  public itemIndice: Array<object>
  constructor(public _indices : IndiceService){
    this.itemIndice = _indices.indice;
  }

  ngOnInit(): void {
  }

}
