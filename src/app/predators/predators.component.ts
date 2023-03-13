import { Component, OnInit, OnDestroy } from '@angular/core';
import { PredatorsService } from '../services/predators.service';
import { PredsData } from './Predators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-predators',
  templateUrl: './predators.component.html',
  styleUrls: ['./predators.component.scss'],
})
export class PredatorsComponent implements OnInit, OnDestroy {
  predsData!: PredsData;
  private subscription: Subscription | undefined;

  constructor(private predsService: PredatorsService) {}

  ngOnInit(): void {
    this.subscription = this.predsService
      .getPredsDataInterval()
      .subscribe((data) => {
        this.predsData = data;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
