import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, switchMap } from 'rxjs';
import { CraftsData } from '../craftrotation/CraftRotation';

@Injectable({
  providedIn: 'root',
})
export class CraftsService {
  constructor(private http: HttpClient) {}

  getCraftssData(): Observable<CraftsData> {
    return this.http.get<CraftsData>(
      'https://api.mozambiquehe.re/crafting?auth=fb01304305ade811cf5071e860f85c4a'
    );
  }

  getCraftsDataInterval(): Observable<CraftsData> {
    return interval(1000).pipe(switchMap(() => this.getCraftssData()));
  }
}
