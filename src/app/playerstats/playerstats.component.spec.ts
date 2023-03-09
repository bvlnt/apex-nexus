import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerstatsComponent } from './playerstats.component';

describe('PlayerstatsComponent', () => {
  let component: PlayerstatsComponent;
  let fixture: ComponentFixture<PlayerstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerstatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
