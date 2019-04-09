import { Injectable } from '@angular/core';
import { ICategory } from './category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  constructor(private http: HttpClient) { }

  public getData(): Observable<ICategory> {
    return this.http.get<ICategory>('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json');
  }
}
