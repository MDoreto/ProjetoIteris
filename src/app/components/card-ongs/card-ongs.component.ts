import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {OngModel} from 'src/app/services/ong-model';



@Component({
  selector: 'app-card-ongs',
  templateUrl: './card-ongs.component.html',
  styleUrls: ['./card-ongs.component.css']
})
export class CardOngsComponent implements OnChanges {

  @Input()ong:OngModel;

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
      this.description = this.ong.description;
      this.logo = this.ong.logo;
      this.name = this.ong.name;
      this.site = this.ong.site;
    }
  }

}
