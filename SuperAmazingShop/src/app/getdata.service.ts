import { Injectable } from '@angular/core';
import { ICategory } from './category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  constructor(private http: HttpClient) { }
  // rubric81
  // the data gets loaded by an http get
  public getData(): Observable<ICategory> {
    return this.http.get<ICategory>('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json');
  }
}
