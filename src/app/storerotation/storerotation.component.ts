import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../services/store.service';
import { StoreItem } from './Storeitem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-storerotation',
  templateUrl: './storerotation.component.html',
  styleUrls: ['./storerotation.component.scss'],
})
export class StorerotationComponent implements OnInit, OnDestroy {
  storeData!: StoreItem[];
  storeSubscription!: Subscription;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeSubscription = this.storeService
      .getStoreData()
      .subscribe((data) => {
        this.storeData = data;
      });
  }

  handleImageError(event: ErrorEvent) {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  }

  ngOnDestroy(): void {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
