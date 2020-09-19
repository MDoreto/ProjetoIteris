import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OngModel } from './ong-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OngAPIService {

  constructor(private httpClient: HttpClient) { }

  public List(): Observable<OngModel[]> {
    return this.httpClient.get<OngModel[]>('https://it3yui.firebaseio.com/alimentos/orgs.json');
  }
}

