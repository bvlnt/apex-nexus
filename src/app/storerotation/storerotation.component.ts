import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { StoreItem } from './Storeitem';

@Component({
  selector: 'app-storerotation',
  templateUrl: './storerotation.component.html',
  styleUrls: ['./storerotation.component.scss'],
})
export class StorerotationComponent implements OnInit {
  storeData!: StoreItem[];
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getStoreData().subscribe((data) => {
      this.storeData = data;
    });
  }

  handleImageError(event: ErrorEvent) {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  }
}
