import { TestBed } from '@angular/core/testing';

import { PredatorsService } from './predators.service';

describe('PredatorsService', () => {
  let service: PredatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
