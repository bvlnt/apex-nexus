import { Component, OnInit } from '@angular/core';
import { CraftsService } from '../services/crafts.service';
import { CraftsData } from './CraftRotation';

@Component({
  selector: 'app-craftrotation',
  templateUrl: './craftrotation.component.html',
  styleUrls: ['./craftrotation.component.scss'],
})
export class CraftrotationComponent implements OnInit {
  craftsData!: CraftsData;
  constructor(private craftsService: CraftsService) {}

  ngOnInit(): void {
    // this.craftsService.getCraftsDataInterval().subscribe((data) => {
    //   this.craftsData = data;
    // });
  }

  handleImageError(event: ErrorEvent) {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  }
}
