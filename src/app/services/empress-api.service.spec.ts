import { TestBed } from '@angular/core/testing';

import { EmpressApiService } from './empress-api.service';

describe('EmpressApiService', () => {
  let service: EmpressApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpressApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
