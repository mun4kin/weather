import { TestBed } from '@angular/core/testing';

import { PreloaderLibService } from './preloader-lib.service';

describe('PreloaderLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreloaderLibService = TestBed.get(PreloaderLibService);
    expect(service).toBeTruthy();
  });
});
