import { TestBed } from '@angular/core/testing';

import { TutorialService } from './tutorial.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TutorialService', () => {
  let service: TutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule]});
    service = TestBed.inject(TutorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
