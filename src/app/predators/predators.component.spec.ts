import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredatorsComponent } from './predators.component';

describe('PredatorsComponent', () => {
  let component: PredatorsComponent;
  let fixture: ComponentFixture<PredatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
