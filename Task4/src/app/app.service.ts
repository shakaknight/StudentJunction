import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient:HttpClient) { }
  getDeals():Observable<any> {
    return this.httpClient.get('http://localhost:3000/deals/deals');
  }
}
