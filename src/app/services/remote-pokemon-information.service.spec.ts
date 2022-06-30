import { TestBed } from '@angular/core/testing';

import { RemotePokemonInformationService } from './remote-pokemon-information.service';

describe('RemotePokemonInformationService', () => {
  let service: RemotePokemonInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemotePokemonInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
