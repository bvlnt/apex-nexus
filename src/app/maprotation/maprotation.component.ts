import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapsService } from '../services/maps.service';
import { MapsData } from './MapRotation';

@Component({
  selector: 'app-maprotation',
  templateUrl: './maprotation.component.html',
  styleUrls: ['./maprotation.component.scss'],
})
export class MaprotationComponent implements OnInit, OnDestroy {
  mapsData!: MapsData;
  subscription!: Subscription;

  constructor(private mapsService: MapsService) {}

  ngOnInit(): void {
    this.subscription = this.mapsService
      .getMapsDataInterval()
      .subscribe((data) => {
        this.mapsData = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleImageError(event: ErrorEvent) {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  }
}
