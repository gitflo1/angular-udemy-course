import { TestBed, inject } from '@angular/core/testing';

import { StarIconService } from './star-icon.service';

describe('StarIconService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarIconService]
    });
  });

  it('should be created', inject([StarIconService], (service: StarIconService) => {
    expect(service).toBeTruthy();
  }));
});
