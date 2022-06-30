import { TestBed } from '@angular/core/testing';

import { PokemonInformationService } from './pokemon-information.service';

describe('PokemonInformationService', () => {
  let service: PokemonInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
