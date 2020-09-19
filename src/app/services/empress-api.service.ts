import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpressModel } from './empress-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpressApiService {

  constructor(private httpClient:HttpClient) { }

  public List(): Observable<EmpressModel[]> {
    return this.httpClient.get<EmpressModel[]>('https://it3yui.firebaseio.com/alimentos/empresas.json');
  }
}
