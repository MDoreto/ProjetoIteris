import { Component, OnInit } from '@angular/core';
import {OngModel} from 'src/app/services/ong-model';
import {OngAPIService} from 'src/app/services/ong-api.service'

@Component({
  selector: 'app-page-ongs',
  templateUrl: './page-ongs.component.html',
  styleUrls: ['./page-ongs.component.css']
})
export class PageOngsComponent implements OnInit {

   listaOngs: OngModel[];
  constructor(private ongsAPi:OngAPIService) { }

  ngOnInit(): void {
    this.ongsAPi.List().subscribe((lista)=>
    {
      this.listaOngs = lista;
    })
  }

}
