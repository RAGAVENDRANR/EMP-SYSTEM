import { TestBed } from '@angular/core/testing';

import { Tes1Service } from './tes1.service';

describe('Tes1Service', () => {
  let service: Tes1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tes1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
