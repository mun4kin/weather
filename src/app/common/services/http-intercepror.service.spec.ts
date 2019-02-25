import { TestBed } from '@angular/core/testing';

import { HttpInterceprorService } from './http-intercepror.service';

describe('HttpInterceprorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceprorService = TestBed.get(HttpInterceprorService);
    expect(service).toBeTruthy();
  });
});
