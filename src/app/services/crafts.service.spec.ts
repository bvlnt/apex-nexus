import { TestBed } from '@angular/core/testing';

import { CraftsService } from './crafts.service';

describe('CraftsService', () => {
  let service: CraftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CraftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
