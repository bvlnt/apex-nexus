import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private apiUrl = 'https://api.mozambiquehe.re/bridge';

  constructor(private http: HttpClient) {}

  getPlayerData(playerName: string, platform: string): Observable<any> {
    const auth = 'fb01304305ade811cf5071e860f85c4a';
    const url = `${this.apiUrl}?auth=${auth}&player=${playerName}&platform=${platform}`;
    return this.http.get(url);
  }
}
