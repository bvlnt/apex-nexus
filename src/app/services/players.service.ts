import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private apiUrl = 'https://api.mozambiquehe.re/bridge';

  constructor(private http: HttpClient) {}

  getPlayerData(playerName: string, platform: string): Observable<any> {
    const auth = 'fb01304305ade811cf5071e860f85c4a';
    const url = `${this.apiUrl}?auth=${auth}&player=${playerName}&platform=${platform}`;

    return interval(1000).pipe(switchMap(() => this.http.get(url)));
  }
}
