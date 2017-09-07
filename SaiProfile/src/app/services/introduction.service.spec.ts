import { TestBed, inject } from '@angular/core/testing';

import { IntroductionService } from './introduction.service';

describe('IntroductionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntroductionService]
    });
  });

  it('should be created', inject([IntroductionService], (service: IntroductionService) => {
    expect(service).toBeTruthy();
  }));
});
