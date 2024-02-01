import { TestBed } from '@angular/core/testing';

import { CookieManagerService } from './cookie-manager.service';

describe('CookieService', () => {
  let service: CookieManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
