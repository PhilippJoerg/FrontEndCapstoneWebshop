import { Injectable } from '@angular/core';
import { GetData } from './getdata';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<GetData[]> {
    return this.http.get<GetData[]>('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json');
  }
}
