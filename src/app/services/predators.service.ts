import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, switchMap } from 'rxjs';
import { MapsData } from '../maprotation/MapRotation';
import { PredsData } from '../predators/Predators';

@Injectable({
  providedIn: 'root',
})
export class PredatorsService {
  constructor(private http: HttpClient) {}

  getPredsData(): Observable<PredsData> {
    return this.http.get<PredsData>(
      'https://api.mozambiquehe.re/predator?auth=fb01304305ade811cf5071e860f85c4a'
    );
  }

  getPredsDataInterval(): Observable<PredsData> {
    return interval(1000).pipe(switchMap(() => this.getPredsData()));
  }
}
