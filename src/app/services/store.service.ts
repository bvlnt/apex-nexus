import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, switchMap } from 'rxjs';
import { StoreItem } from '../storerotation/Storeitem';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}

  getStoreData(): Observable<StoreItem[]> {
    return this.http.get<StoreItem[]>(
      'https://api.mozambiquehe.re/store?auth=fb01304305ade811cf5071e860f85c4a'
    );
  }
}
