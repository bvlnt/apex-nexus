import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerotationComponent } from './storerotation.component';

describe('StorerotationComponent', () => {
  let component: StorerotationComponent;
  let fixture: ComponentFixture<StorerotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorerotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorerotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
