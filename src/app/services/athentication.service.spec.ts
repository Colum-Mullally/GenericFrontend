import { TestBed } from '@angular/core/testing';

import { AthenticationService } from './athentication.service';

describe('AthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthenticationService = TestBed.get(AthenticationService);
    expect(service).toBeTruthy();
  });
});
