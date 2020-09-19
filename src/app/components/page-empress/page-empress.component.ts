import { Component, OnInit } from '@angular/core';
import { EmpressModel } from 'src/app/services/empress-model';
import {EmpressApiService} from 'src/app/services/empress-api.service';
@Component({
  selector: 'app-page-empress',
  templateUrl: './page-empress.component.html',
  styleUrls: ['./page-empress.component.css']
})
export class PageEmpressComponent implements OnInit {

  listaEmpress: EmpressModel[];
  constructor(private empressAPi:EmpressApiService) { }

  ngOnInit(): void {
    this.empressAPi.List().subscribe((lista)=>
    {
      this.listaEmpress = lista;
    })
  }

}
