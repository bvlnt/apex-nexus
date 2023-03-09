import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, switchMap } from 'rxjs';
import { MapsData } from '../maprotation/MapRotation';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  constructor(private http: HttpClient) {}

  getMapsData(): Observable<MapsData> {
    return this.http.get<MapsData>(
      'https://api.mozambiquehe.re/maprotation?version=2&auth=fb01304305ade811cf5071e860f85c4a'
    );
  }

  getMapsDataInterval(): Observable<MapsData> {
    return interval(1000).pipe(switchMap(() => this.getMapsData()));
  }
}
