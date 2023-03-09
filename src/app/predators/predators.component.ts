import { Component, OnInit } from '@angular/core';
import { PredatorsService } from '../services/predators.service';
import { PredsData } from './Predators';

@Component({
  selector: 'app-predators',
  templateUrl: './predators.component.html',
  styleUrls: ['./predators.component.scss'],
})
export class PredatorsComponent implements OnInit {
  predsData!: PredsData;
  constructor(private predsService: PredatorsService) {}

  ngOnInit(): void {
    this.predsService.getPredsDataInterval().subscribe((data) => {
      this.predsData = data;
    });
  }
}
