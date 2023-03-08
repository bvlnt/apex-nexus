import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maprotation',
  templateUrl: './maprotation.component.html',
  styleUrls: ['./maprotation.component.scss'],
})
export class MaprotationComponent implements OnInit {
  maps = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        'https://api.mozambiquehe.re/maprotation?version=2&auth=fb01304305ade811cf5071e860f85c4a'
      )
      .subscribe((data: any) => {
        this.maps = data;
        console.log(this.maps);
      });
  }
}
