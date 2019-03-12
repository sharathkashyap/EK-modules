import { TestBed } from '@angular/core/testing';

import { EkComponentLibService } from './ek-component-lib.service';

describe('EkComponentLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EkComponentLibService = TestBed.get(EkComponentLibService);
    expect(service).toBeTruthy();
  });
});
