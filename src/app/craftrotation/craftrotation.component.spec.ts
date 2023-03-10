import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftrotationComponent } from './craftrotation.component';

describe('CraftrotationComponent', () => {
  let component: CraftrotationComponent;
  let fixture: ComponentFixture<CraftrotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftrotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftrotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
