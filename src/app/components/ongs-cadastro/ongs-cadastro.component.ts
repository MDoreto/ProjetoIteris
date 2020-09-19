import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ongs-cadastro',
  templateUrl: './ongs-cadastro.component.html',
  styleUrls: ['./ongs-cadastro.component.css']
})
export class OngsCadastroComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Acre', abbreviation: 'AC'},
    {name: 'Alagoas', abbreviation: 'AL'},
    {name: 'Amapá', abbreviation: 'AP'},
    {name: 'Amazonas', abbreviation: 'AM'},
    {name: 'Bahia', abbreviation: 'BA'},
    {name: 'Ceará', abbreviation: 'CE'},
    {name: 'Distrito Federal', abbreviation: 'DF'},
    {name: 'Espírito Santo', abbreviation: 'ES'},
    {name: 'Goiás', abbreviation: 'GO'},
    {name: 'Maranhão', abbreviation: 'MA'},
    {name: 'Mato Grosso', abbreviation: 'MT'},
    {name: 'Mato Grosso do Sul', abbreviation: 'MS'},
    {name: 'Minas Gerais', abbreviation: 'MG'},
    {name: 'Pará', abbreviation: 'PA'},
    {name: 'Paraíba', abbreviation: 'PB'},
    {name: 'Paraná', abbreviation: 'PR'},
    {name: 'Pernambuco', abbreviation: 'PE'},
    {name: 'Piauí', abbreviation: 'PI'},
    {name: 'Rio de Janeiro', abbreviation: 'RJ'},
    {name: 'Rio Grande do Norte', abbreviation: 'RN'},
    {name: 'Rio Grande do Sul', abbreviation: 'RS'},
    {name: 'Rondônia', abbreviation: 'RO'},
    {name: 'Roraima', abbreviation: 'RR'},
    {name: 'Santa Catarina', abbreviation: 'SC'},
    {name: 'São Paulo', abbreviation: 'SP'},
    {name: 'Sergipe', abbreviation: 'SE'},
    {name: 'Tocantins', abbreviation: 'TO'},
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Cadastro realizado com sucesso!');
  }
}
