import { TestBed } from '@angular/core/testing';

import { LeagueSelectedService } from './league-selected.service';

describe('LeagueSelectedService', () => {
  let service: LeagueSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
