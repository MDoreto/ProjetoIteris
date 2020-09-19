import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EmpressModel } from 'src/app/services/empress-model';

@Component({
  selector: 'app-card-empress',
  templateUrl: './card-empress.component.html',
  styleUrls: ['./card-empress.component.css']
})
export class CardEmpressComponent implements OnChanges {
  @Input() ong:EmpressModel;

  address:string;
  description:string;
  logo:string;
  name:string;
  site:string;
  constructor() { }

  ngOnChanges(): void {
    if(this.ong!=null)
    {
      this.address = this.ong.address;
      this.logo = this.ong.logo;
      this.name = this.ong.name;
      this.site = this.ong.site;
    }
  }

}
