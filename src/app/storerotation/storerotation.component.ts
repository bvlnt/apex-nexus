import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';
import { StoreItem } from './Storeitem';

@Component({
  selector: 'app-storerotation',
  templateUrl: './storerotation.component.html',
  styleUrls: ['./storerotation.component.scss'],
})
export class StorerotationComponent {
  storeData: StoreItem[] = [];
  constructor(private storeService: StoreService) {}

  // ngOnInit(): void {
  //   this.storeService.getStoreData().subscribe((data: StoreItem[]) => {
  //     this.storeData = data[0].content;
  //     console.log(this.storeData);
  //     this.storeData.forEach((innerItem) => {
  //       // access each property inside the inner array
  //       const ref = innerItem.ref;
  //       const name = innerItem.name;
  //       const quantity = innerItem.quantity;
  //       // do something with these values
  //     });
  //   });
  // }

  handleImageError(event: ErrorEvent) {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  }
}
