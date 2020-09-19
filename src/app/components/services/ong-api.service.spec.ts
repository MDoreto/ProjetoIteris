import { TestBed } from '@angular/core/testing';

import { OngAPIService } from './ong-api.service';

describe('OngAPIService', () => {
  let service: OngAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OngAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
