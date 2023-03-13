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
  countdown: { days: number; hours: number; minutes: number; seconds: number } =
    { days: 0, hours: 0, minutes: 0, seconds: 0 };

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeSubscription = this.storeService
      .getStoreData()
      .subscribe((data) => {
        this.storeData = data;
      });

    //make me a timer that countdowns to tuesday 21:00 every week <div>Expires in: {{countdown.days}}:{{countdown.hours}}:{{countdown.minutes}}</div>
    setInterval(() => {
      const now = new Date();
      const target = new Date();
      target.setHours(21, 0, 0, 0);
      if (now.getDay() === 6 && now.getHours() >= 21) {
        target.setDate(target.getDate() + 7);
      }
      while (target.getDay() !== 2) {
        target.setDate(target.getDate() + 1);
      }
      const diff = target.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      this.countdown = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    }, 1000);
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
