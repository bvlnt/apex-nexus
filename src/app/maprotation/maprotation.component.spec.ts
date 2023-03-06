import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaprotationComponent } from './maprotation.component';

describe('MaprotationComponent', () => {
  let component: MaprotationComponent;
  let fixture: ComponentFixture<MaprotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaprotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaprotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
