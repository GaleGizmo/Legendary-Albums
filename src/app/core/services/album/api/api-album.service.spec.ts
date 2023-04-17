import { TestBed } from '@angular/core/testing';

import { ApiAlbumService } from './api-album.service';

describe('ApiAlbumService', () => {
  let service: ApiAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
