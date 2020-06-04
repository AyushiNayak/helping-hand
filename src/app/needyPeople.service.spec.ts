import { TestBed } from '@angular/core/testing';

import { NeedyPeopleService } from './needyPeople.service';

describe('NeedyPeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeedyPeopleService = TestBed.get(NeedyPeopleService);
    expect(service).toBeTruthy();
  });
});
